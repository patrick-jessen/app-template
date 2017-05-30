<template>
<div class='child__actions'>
  <slot/>
  <div class='child__actions__overlay'></div>
</div>
</template>

<script>
</script>

<style lang='scss'>
.child__actions {
  position: relative;
  flex: 1 1 0px;
}
.child__actions__overlay {

}
</style>