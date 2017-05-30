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
    var data = Object.assign({}, context.data)
    data.attrs.namespace = namespace
    if(!data.staticClass)
      data.staticClass = ''
    data.staticClass += ' child__hover'
    
    if(!data.nativeOn)
      data.nativeOn = {}
    data.nativeOn.mouseenter = (e) => {
      e.target.className += ' child--hovered'
    }
    data.nativeOn.mouseleave = (e) => {
      e.target.className = e.target.className.replace(' child--hovered', '')
    }

    var el = createElement(getComponent(type), data)
    return el
  }
}
</script>

<style lang='scss'>
.child__hover:hover {
  outline: 1px dashed gray;
  z-index: 999;
  position: relative;
}
</style>