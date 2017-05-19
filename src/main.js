require('./vcms/vcms')

var ctx

var components = {}

//bundle-loader?name=[name]!
ctx = require.context('./vcms/components', true, /\.vue$/)
ctx.keys().forEach((f) => {
  var name = f.match(/\w+(?=\.)/)[0]
  components[name] = () => import('./vcms/components/' + name + '.vue')
})

ctx = require.context('./app/components', true, /\.vue$/)
ctx.keys().forEach((f) => {
  let name = f.match(/\w+(?=\.)/)[0]
  components[name] = () => import('./app/components/' + name + '.vue')
})

ctx = require.context('./app/layouts', true, /\.vue$/)
ctx.keys().forEach((f) => {
  var name = f.match(/\w+(?=\.)/)[0]
  components[name] = () => import('./app/layouts/' + name + '.vue')
})

Vue.mixin({
  components
})

console.log(components)

window.components = components

window.vue = new Vue(require('./App.vue'))
window.vue.$mount('#app')