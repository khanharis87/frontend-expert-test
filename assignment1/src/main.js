import Vue from 'vue'
import store from './vuex'
import App from './App.vue'

// Vue instance https://vuejs.org/v2/guide/instance.html
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

