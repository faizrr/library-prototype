import * as types from '../mutation-types'

const state = {
  isAuthenticated: false,
  user: null
}

const mutations = {
  [types.AUTHENTICATE_USER] (state, user) {
    state.isAuthenticated = true
    state.user = user
  },
  [types.LOG_OUT] (state) {
    state.isAuthenticated = false
    state.user = null
  }
}

export default {
  state,
  mutations
}
