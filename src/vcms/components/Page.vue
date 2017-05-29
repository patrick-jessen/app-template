<script>
export default {
  props: ['namespace'],
  functional: true,
  render(createElement, context) {
    var ns = context.props.namespace
    var route = context.parent.$route.path
    var routeNs = ns.page(route)

    if(!context.data.attrs)
      context.data.attrs = {}

    context.data.attrs.namespace = routeNs

    var pageStore = routeNs.get
    if(!pageStore || !pageStore.$type) {
      console.error('Missing prop:', routeNs.namespace + '.$type')
      return createElement('None', context.data)
    }
    var type = pageStore.$type

    return createElement(type, context.data)
  }
}
</script>