require('./vcms/vcms')

var ctx

var components = {}

ctx = require.context('bundle-loader?name=[name]!./vcms/components', true, /\.vue$/)
ctx.keys().forEach((f) => {
  var name = f.match(/\w+(?=\.)/)[0]
  components[name] = () => import('./vcms/components/' + name + '.vue')
})

ctx = require.context('bundle-loader?name=[name]!./app/components', true, /\.vue$/)
ctx.keys().forEach((f) => {
  var name = f.match(/\w+(?=\.)/)[0]
  components[name] = () => import('./app/components/' + name + '.vue')
})

ctx = require.context('bundle-loader?name=[name]!./app/layouts', true, /\.vue$/)
ctx.keys().forEach((f) => {
  var name = f.match(/\w+(?=\.)/)[0]
  components[name] = () => import('./app/layouts/' + name + '.vue')
})

Vue.mixin({
  components
})

window.components = components

window.vue = new Vue(require('./App.vue'))
window.vue.$mount('#app')