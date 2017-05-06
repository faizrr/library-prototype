import * as types from '../mutation-types'
import { find, findIndex } from 'lodash'

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
  [types.CREATE_OR_UPDATE_USER] (state, user) {
    const userInState = find(state, { login: user.login })
    if (!userInState) {
      state.push(user)
    } else {
      Object.assign(userInState, user)
    }
  },
  [types.REMOVE_USER] (state, user) {
    const index = findIndex(state, user)
    state.splice(index, 1)
  }
}

export default {
  state,
  mutations
}
