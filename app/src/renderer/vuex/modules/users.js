import * as types from '../mutation-types'

const state = [
  {
    login: 'admin',
    password: 'admin',
    role: 'admin'
  },
  {
    login: 'user',
    password: 'user',
    role: 'user'
  }
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
