<template>
<div class='testwrapper'>
  <input :value='value'>
</div>
</template>

<script>
export default {
  name: 'Test',
  mixins: [vcms.mixin],
}
</script>

<style>
.testwrapper {
  background-color: red;
  overflow: hidden;
  border: 1px solid green;
}
input {
  width: 100%;

}
</style>