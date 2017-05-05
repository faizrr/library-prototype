import * as types from '../mutation-types'

const state = {
  isAuthenticated: false,
  user: null
}

const mutations = {
  [types.AUTHENTICATE_USER] (state, user) {
    state.isAuthenticated = true
    state.user = user
  }
}

export default {
  state,
  mutations
}
