function getContentStore() {
  //return window.vue.$root.content
  return window.vue.$root.$children[0].content
}

export class Namespace {
  constructor(namespace, type) {
    this.namespace = namespace
    this.type = type
  }

  get isComponent() {
    return this.type === 'component'
  }
  get isChildren() {
    return this.type === 'children'
  }
  get isProperty() {
    return this.type === 'property'
  }

  get typeDef() {
    switch(this.type) {
      case 'component':
        return window.vcms.defs[this.get.$type]
      default:
        throw 'Namespace does not point to a component'
    }
  }

  child(name) {
    switch(this.type) {
      case 'component':
        return new Namespace(this.namespace + '.$children.' + name, 'component')
      case 'children':
        return new Namespace(this.namespace + '.' + name, 'component')
      default:
        throw 'Namespace does not point to a component'
    }
  }

  page(route) {
    return new Namespace(this.namespace + '.' + '$routes.' + route, 'component')
  }

  get children() {
    switch(this.type) {
      case 'component':
        return new Namespace(this.namespace + '.$children', 'children')
      default:
        throw 'Namespace does not point to a component'
    }
  }
  
  childrenSet(name) {
    switch(this.type) {
      case 'children':
        return new Namespace(this.namespace + '.' + name)
      default:
        throw 'Namespace does not point to $children'
    }
  }

  get columns() {
    return new Namespace(this.namespace + '.$columns', 'children')
  }
  column(index) {
    return new Namespace(this.namespace + '.' + '$columns.' + index)
  }

  get get() {   
    var store = getContentStore()
    var path = this.namespace.split('.')
    
    try {
      for(var i = 0; i < path.length; i++) {
        store = store[path[i]]
      }
    }
    catch(e) {
      console.error(e)
      return
    }

    return store
  }
}