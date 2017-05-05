import * as types from './mutation-types'

// Auth
export const authenticate = ({ commit }) => {
  commit(types.AUTHENTICATE_USER)
}
export const logOut = ({ commit }) => {
  commit(types.LOG_OUT)
}
