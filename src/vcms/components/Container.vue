<template>
<div :class='containerClass' :style='containerStyle'>
  <Child v-for='(c,i) in children' 
    :namespace='childNamespaces[i]'
    :key='childNamespaces[i]'
    class='item'
    />
</div>
</template>

<script>
export default {
  props: ['options', 'namespace'],
  computed: {
    _options() {
      if(this.options)
        return this.options

      return this.namespace.get.$props
    },
    ns() {
      if(this.namespace)
        return this.namespace
      return this.$parent.namespace
    },
    children() {
      var childrenNs = this.ns.children
      return childrenNs.get
    },
    childNamespaces() {
      var namespaces = []
      for(var i = 0; i < this.children.length; i++)
        namespaces.push(this.ns.child(i))
      return namespaces
    },
    containerClass() {
      return {
        'container-vertical': this._options.layout === 'vertical',
        'container-horizontal': this._options.layout === 'horizontal'
      }
    },
    containerStyle() {
      return this._options.style
    }
  },
}
</script>

<style lang='scss'>
.container-cell {
  //outline: 3px solid red;
  box-sizing: border-box;
  vertical-align: top;
  overflow: hidden;

  &.horizontal {
    display: inline-block;
  }
  &.vertical {
    display: block;
  }
}
.centered-container {
  text-align: center;
}
.left-container {
  text-align: left;
}
.add-item {
  font-size: 50px;
  text-align: center;
}

.container-vertical {
  display: block;
}
.container-horizontal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  flex: 1 1 0px;
}
</style>