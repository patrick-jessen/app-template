<template>
<div :class='containerClass'>
  <Child v-for='(c,i) in children' 
    :namespace='childNamespaces[i]'
    :key='childNamespaces[i]'
    :style='childStyles[i]'
    :class='childClass'/>
  <div class='add-item'>+</div>
</div>
</template>

<script>
export default {
  props: ['options', 'namespace'],
  data() {
    return {
      containerWidth: 0
    }
  },
  created() {
    window.addEventListener('resize', this.updateWidth)
  },
  mounted() {
    this.updateWidth()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth)
  },
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
    splitChildren() {
      var rows = [[]]
      var i = 0

      while(true) {
        var accWidth = 0
        for(; i < this.childNamespaces.length; i++) {

          var typeDef = this.childNamespaces[i].typeDef
          var w = 300
          if(typeDef)
            w = typeDef.layout.minWidth

          // There aren't room for any more
          if((accWidth + w) > this.containerWidth) {
            if(rows[rows.length-1].length > 0) // Each row must contain at least one component
              break
          }
          
          // There is room
          rows[rows.length-1].push(i)
          accWidth += w
        }

        // All children have been processed
        if(i === this.childNamespaces.length)
          break

        // Add a row
        rows.push([])
      }

      return rows
    },
    childStyles() {
      var styles = []

      if(this._options && this._options.layout === 'horizontal') {
        var rows = this.splitChildren
        for(var i = 0; i < rows.length; i++) {
          var len = rows[i].length
          var rowWidth = rows[i].reduce((prev, curr) => {
            var typeDef = this.childNamespaces[curr].typeDef
            var w = 300
            if(typeDef)
              w = typeDef.layout.minWidth
            return prev + w
          }, 0)

          var ratio = this.containerWidth / rowWidth
          for(var ii = 0; ii < len; ii++) {
            var typeDef = this.childNamespaces[rows[i][ii]].typeDef
            var minWidth = 300
            var maxWidth = 300
            if(typeDef) {
              minWidth = typeDef.layout.minWidth
              maxWidth = typeDef.layout.maxWidth
            }
            var width = minWidth * ratio
            if(width > maxWidth)
              width = maxWidth

            var percentage = width / this.containerWidth * 100
            styles.push({
              width: percentage + '%'
            })
          }
        }
      }
      // if(styles.length == 0) {
      //   console.log('len is 0', this.children.length)
      //   for(var i = 0; i < this.children.length; i++) {
      //     styles.push({})
      //   }
      //   console.log(styles.length)
      // }
      
      return styles
    },
    childClass() {
      return {
        'container-cell': true,
        'horizontal': this._options && this._options.layout === 'horizontal',
        'vertical': this._options && this._options.layout === 'vertical'
      }
    },
    containerClass() {
      return {
        'centered-container': this._options && this._options.center,
        'left-container': !this._options || !this._options.center
      }
    }
  },
  methods: {
    updateWidth() {
      console.log(this.$el.clientWidth)
      //this.containerWidth = this.$el.clientWidth
      var computedStyle = window.getComputedStyle(this.$el);
      var elementWidth = this.$el.clientWidth;   // width with padding
      elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

      this.containerWidth = elementWidth
    },
  }
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
</style>