<script>
function getComponent(name) {
  return window.components[name]
}

export default {
  props: ['name', 'namespace'],
  functional: true,

  render(createElement, context) {
    var namespace = context.props.namespace
    if(!namespace)
      context.parent.namespace.child(context.props.name)
      
    var store = namespace.get
    if(!store || !store.$type) {
      console.warn('Child does not exist', namespace.namespace)
      return createElement(getComponent('None'), {attrs:{namespace}})
    }

    var type = store.$type
    context.data.attrs.namespace = namespace

    return createElement(getComponent(type), context.data)
  }
}
</script>