<template>
<div>
  <input :value='value'>
</div>
</template>

<script>
export default {
  mixins: [vcms.mixin],
  data() {
    return {
      someData: 32
    }
  }
}
</script>