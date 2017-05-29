<template>
<div class='vcms'>
  <Container :options='appLayout' class='appClass'/>
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
  computed: {
    appLayout() {
      return {
        //layout: 'horizontal',
        //center: true
        layout: 'vertical'
      }
    }
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
.appClass {
  //max-width: 1000px;
  //margin: auto;
  //padding: 0 20px;
}
</style>