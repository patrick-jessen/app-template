<template>
<div :class='containerClass'>
  <Child v-for='(c,i) in children' 
    :namespace='childNamespaces[i]'
    :key='childNamespaces[i]'
    :style='childStyles[i]'
    :class='childClass'/>
</div>
</template>

<script>
export default {
  props: ['options'],
  data() {
    return {
      containerWidth: 1000
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
    children() {
      var childrenNs = this.$parent.namespace.children
      return childrenNs.get
    },
    childNamespaces() {
      var namespaces = []
      for(var i = 0; i < this.children.length; i++)
        namespaces.push(this.$parent.namespace.child(i))
      return namespaces
    },
    childStyles() {
      var styles = []

      if(this.options && this.options.layout === 'horizontal') {
        var rows = this.splitChildren()
        for(var i = 0; i < rows.length; i++) {
          var len = rows[i].length
          var rowWidth = rows[i].reduce((prev, curr) => {
            return prev + 300 //TEMP
          }, 0)

          var ratio = this.containerWidth / rowWidth
          for(var ii = 0; ii < len; ii++) {
            var minWidth = 300 //TEMP
            var maxWidth = 400 //TEMP
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
      else {
        for(var i = 0; i < this.children.length; i++) {
          styles.push()
        }
      }
      
      return styles
    },
    childClass() {
      return {
        'container-cell': true,
        'horizontal': this.options && this.options.layout === 'horizontal',
        'vertical': this.options && this.options.layout === 'vertical'
      }
    },
    containerClass() {
      return {
        'centered-container': this.options && this.options.center
      }
    }
  },
  methods: {
    updateWidth() {
      //this.containerWidth = this.$el.clientWidth
      var computedStyle = window.getComputedStyle(this.$el);
      var elementWidth = this.$el.clientWidth;   // width with padding
      elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

      this.containerWidth = elementWidth
    },
    splitChildren() {
      var rows = [[]]
      var i = 0

      while(true) {
        var accWidth = 0
        for(; i < this.children.length; i++) {
          var w = 300 //TEMP

          // There aren't room for any more
          if((accWidth + w) > this.containerWidth)
            break
          
          // There is room
          rows[rows.length-1].push(i)
          accWidth += w
        }

        // All children have been processed
        if(i === this.children.length)
          break

        // Add a row
        rows.push([])
      }

      return rows
    }
  }
}
</script>

<style lang='scss'>
.container-cell {
  outline: 3px solid red;
  box-sizing: border-box;

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
</style>