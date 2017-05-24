<template>
<div class='vcms'>
  <Children class='app' />
  <Inspector v-if='editMode' />
</div>
</template>

<script>
import {Namespace} from './vcms/structs'
var content = require('./app/content/store.js').default

export default {
  data() {
    return {
      editMode: true,
      content: null,
      namespace: new Namespace('app', 'component')
    }
  },
  mounted() {
    this.$set(this, 'content', content)
    this.$forceUpdate()
    window.store = this.content
  },
  components: window.components
}
</script>

<style lang='scss'>
body {
  margin: 0;
}
* {
  font-family: 'Roboto', sans-serif;
}
</style>