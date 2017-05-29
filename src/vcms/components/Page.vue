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

    return createElement('Children', context.data)
  }
}
</script>