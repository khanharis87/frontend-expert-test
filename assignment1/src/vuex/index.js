import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {SET_STORE} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      data: {
        bounds: {},
        rows: []
      }
    },
    mutations: {
      [SET_STORE](state, payload) {
        state.data =  payload
      }
    },
    actions: {
      getAll({commit}) {
        const URI = 'https://www.deskbookers.com/nl-nl/search/ajax.json'
        return axios.get(URI).then(response => {
          commit('SET_STORE', response.data)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    getters: {
      getAll(state) {
        return state.data
      },
      rows(state) {
        return state.data.rows
      },
      bounds(state) {
        return state.data.bounds
      },
      locations(state) {
        return state.data.rows.map((row) => row.coordinate)
      },
      loadMap(state) {
        return state.loadMap
      }
    }
  })