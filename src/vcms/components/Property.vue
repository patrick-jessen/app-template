<script>
export default {
  functional: true,
  render(createElement, context) {
    return createElement('div', context.data, context.slots().default)
  }
}
</script>