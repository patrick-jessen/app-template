<template>
<div>
  <BasicLayout :namespace='appNamespace'/>
  <Inspector v-if='editMode'/>
</div>
</template>

<script>
import {Namespace} from './vcms/structs'

export default {
  data() {
    return {
      editMode: true,
      content: require('./app/content/store.js').default
    }
  },
  computed: {
    appNamespace() {
      return new Namespace('app', 'component')
    }
  },
}
</script>