import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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

components.App = () => import('./App.vue')

Vue.mixin({
  components
})

window.components = components

var router = new VueRouter({
  mode: 'history',
})


window.vue = new Vue({
  render: h => h('App'),
  components,
  router
})
window.vue.$mount('#app')