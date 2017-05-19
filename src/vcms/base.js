window.vcms.mixin = {
  props: ['namespace'],
  data() {
    return {
      value: 'hest',
      content: null
    }
  },

  created() {
    this.content = this.namespace.get
  },

  beforeCreate() {
    var name = this.$options._componentTag
    
    var config
    try {
     config = require('../app/components/' + name + '.yml')
    }
    catch(e) {
      try {
        config = require('../app/layouts/' + name + '.yml')
      }
      catch(e) {
        console.log(this.$options)
        console.warn(`[${name}] has no def file`)
        return
      }
    }
    
    addProperties(this, config.properties)
    console.log(config)
  },
}


function StoreAccessor(property) {
  return {
    get() {
      return this.content.$props[property]
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