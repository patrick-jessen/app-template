window.vcms.defs = {}

window.vcms.mixin = {
  props: ['namespace'],
  data() {
    return {
      content: null
    }
  },

  created() {
    this.content = this.namespace.get
  },

  beforeCreate() {
    var name = this.$options.name
    
    var config = this.$options.vcms
    if(!config) {
      try {
      config = require('../app/components/' + name + '.yml')
      }
      catch(e) {
        console.warn(`[${name}] has no def file`)
        return
      }
    }

    console.log('nanaaa', name)

    window.vcms.defs[name] = config    
    addProperties(this, config.properties)
  },
}


function StoreAccessor(property) {
  return {
    get() {
      try {
        return this.content.$props[property]
      }
      catch (e) {
        console.error('Missing property:', this.namespace.namespace + '.$props.' + property)
      }
    },
    set(v) {
      var err = new Error()
      console.warn('Content should not be set directly [' + this.namespace.namespace + ']\n' + err.stack)
      this.content.$props[property] = v
    }
  }
}


function addProperties(component, properties) {
  // Make sure computed object exists
  if(!component.$options.computed)
    component.$options.computed = {}

  // Get component's namespace
  var namespace = component.$options.propsData.namespace

  // Create namespace and computed getter for each property
  for(p in properties) {
    var propName = properties[p].name
    component.$options.computed[propName] = new StoreAccessor(propName)
  }
}