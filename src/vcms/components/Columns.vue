<template>
<div ref='base' :style='baseStyle'>
  <div class='column' v-for='(c,i) in children' :style='columnStyles[i]'>
    <Children :name='i'/>
  </div>
</div>
</template>

<script>
export default {
  mixins: [vcms.mixin],
  vcms:{
    properties: [
      {name: 'gutter'},
      {name: 'columns'},
      {name: 'breakpoint'},
    ]
  },
  data() {
    return {
      totalWidth: 10000
    }
  },
  created() {
    window.addEventListener('resize', () => { 
      this.totalWidth = this.$refs.base.clientWidth
    })
  },
  computed: {
    children() {
      var ns = this.namespace.children
      return ns.get
    },
    columnStyles() {
      var sum = this.columns.reduce((acc, c) => {
        return acc + c
      }, 0)
      var breakFactor = this.breakpoint / sum
      

      if(this.totalWidth < this.breakpoint) {

        var arrs = [[]]

        var acc = 0
        var arrIdx = 0
        arrs.push([])

        for(var i = 0; i < this.columns.length; i++) {
          var width = this.columns[i] * breakFactor

          if((acc + width) > this.totalWidth) {           
            acc = width
            arrs.push([])
            arrIdx++
            arrs[arrIdx].push(this.columns[i])
          }
          else {
            acc += width
            arrs[arrIdx].push(this.columns[i])
          }
        }

        var ret = []
        for(var i = 0; i < arrs.length; i++) {

          var sum = arrs[i].reduce((acc, c) => {
            return acc + c
          }, 0)
          var breakFactor = 0
          var percentFactor = 100 / sum
          ret.push(...createStyles(arrs[i], breakFactor, percentFactor, this.gutter))
        }
        return ret
      }
      else {
        var percentFactor = 100 / sum
        return createStyles(this.columns, breakFactor, percentFactor, this.gutter)
      }
    },
    baseStyle() {
      return {
        marginLeft: this.gutter + 'px'
      }
    }
  },
  // components: {
  //   Child: () => import('./Child.vue'),
  //   Children: () => import('./Children.vue')
  // }
  components: window.components
}

function createStyles(columns, breakFactor, percentFactor, gutter) {
  var ret = []
  for(var i = 0; i < columns.length; i++) {
    var minWidth = breakFactor * columns[i]
    var width = percentFactor * columns[i]

    var mw = minWidth + gutter
    var w = `calc(${width}% - ${gutter}px)`

    ret.push({
      width: w,
      minWidth: minWidth + 'px',
      marginRight: gutter + 'px'
    })
  }
  return ret
}

</script>

<style>
.column {
  display: inline-block;
  vertical-align: top;
}
</style>