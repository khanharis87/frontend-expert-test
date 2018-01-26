import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {GET_ALL} from './mutation-types'

import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    data: {
      rows: []
    }
  },
  mutations: {
    [GET_ALL](state, payload) {
      console.log(state, payload)
      state.data =  payload
      console.log(state)
    }
  },
  actions: {
    getAll({commit}) {
      const URI = 'https://www.deskbookers.com/nl-nl/search/ajax.json'
      axios.get(URI).then(res => commit('GET_ALL', res.data))
    }
  },
  getters: {
    getAll(state) {
      return state.data
    },
    getCoordinates(state) {
      console.log(state.data.rows.map((row) => row.coordinate))
      return state.data.rows.map((row) => row.coordinate)
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

