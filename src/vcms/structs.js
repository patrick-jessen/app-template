function getContentStore() {
  return window.vue.$root.content
}

export class Namespace {
  constructor(namespace, type) {
    this.namespace = namespace
    this.type = type
  }

  get isComponent() {
    return this.type === 'component'
  }
  get isProperty() {
    return this.type === 'property'
  }

  child(name) {
    if(!this.isComponent) {
      throw 'Namespace does not point to a component'
    }

    return new Namespace(this.namespace + '.$children.' + name, 'component')
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