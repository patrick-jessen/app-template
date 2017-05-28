<script>
export default {
  props: ['namespace'],
  functional: true,
  render(createElement, context) {
    var ns = context.props.namespace
    var route = context.parent.$route.path
    var routeNs = ns.page(route)

    console.log('namespace', routeNs)
    return createElement('Children', {attrs:{namespace:routeNs}})
  }
}
</script>