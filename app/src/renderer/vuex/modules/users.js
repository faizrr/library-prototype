import * as types from '../mutation-types'

const state = [
  { login: 'admin', password: 'admin', role: 'admin' }
]

const mutations = {
  [types.ADD_USER] (state, user) {
    state.push(user)
  }
}

export default {
  state,
  mutations
}
