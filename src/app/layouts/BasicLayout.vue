<template>
<div>
  <h1>{{test}}{{test2}}</h1>
  <!--<Child v-for='c in children' :name='c' :key='c'/>-->
  <Child name='childtest' test='123'/>
</div>
</template>

<script>
export default {
  mixins: [vcms.mixin],
  computed: {
    children() {
      return []
    }
  },
  components: {
    Child: require('../../vcms/components/Child.vue')
  }
}
</script>