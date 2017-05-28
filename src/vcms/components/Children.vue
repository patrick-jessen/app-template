<script>
import {Namespace} from '../structs'

export default {
  props: ['name', 'namespace'],
  functional: true,
  render(createElement, context) {
    var childrenNs = context.props.namespace
    if(!childrenNs) {
      if(typeof context.props.name === 'undefined')
        childrenNs = context.parent.namespace.children
      else
        childrenNs = context.parent.namespace.child(context.props.name)
    }

    var store = childrenNs.get
    if(!store) {
      console.error('Missing $children:', childrenNs.namespace)
      return createElement('None', {attrs:{namespace:childrenNs}})
    }

    var cls = context.data.staticClass

    var children = []
    for(var i = 0; i < store.length; i++) {
      var data = context.data
      if(!data.attrs)
        data.attrs = {}
      data.attrs.namespace = new Namespace(childrenNs.namespace + '.' + i, 'component')
      data.key = store
      data.staticClass = ''
      var child = store[i]
      var el = createElement(child.$type, data)
      children.push(el)
    }

    return createElement('div', {attrs:{class:cls}}, children)
  }
}
</script>