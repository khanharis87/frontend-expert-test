import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {SET_STORE} from './mutation-types'

Vue.use(Vuex)

//Vuex store https://vuex.vuejs.org/en/core-concepts.html
export default new Vuex.Store({
  //Initial state
    state:{
      data: {
        bounds: {},
        rows: []
      }
    },
    //Mutations to state
    mutations: {
      [SET_STORE](state, payload) {
        state.data =  payload
      }
    },
    //Actions: they commit mutations
    actions: {
      setStore({commit}) {
        const URI = 'https://www.deskbookers.com/nl-nl/search/ajax.json'
        return axios.get(URI).then(response => {
          commit('SET_STORE', response.data)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    //Getters
    getters: {
      rows(state) {
        return state.data.rows
      },
      bounds(state) {
        return state.data.bounds
      },
      locations(state) {
        return state.data.rows.map((row) => row.coordinate)
      }
    }
  })