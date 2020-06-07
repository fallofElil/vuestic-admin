import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import axios from 'axios'
import app from './modules/app'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
  },
  state: {
    currentUser: 'Sergey',
    users: [],
    products: [],
  },
  mutations: {
    SET_USERS_TO_STATE: (state, payload) => {
      state.users = payload
    },
  },
  actions: {
    GET_USERS ({ commit }) {
      return axios('http://localhost:8082/api/users', {
        method: 'GET',
      })
        .then(res => {
          commit('SET_USERS_TO_STATE', res.data.users)
          return res.data.users
        })
        .catch(err => {
          console.error('ERROR IN GETTING USERS ', err)
          return err
        })
    },
  },
})

Vue.use(VuexI18n.plugin, store)

export default store
