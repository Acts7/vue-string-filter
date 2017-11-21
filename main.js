import Vue from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

import VueStringFilter from './VueStringFilter.js'
Vue.use(VueStringFilter)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})

