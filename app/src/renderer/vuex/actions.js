import * as types from './mutation-types'

export const authenticate = ({ commit }) => {
  commit(types.AUTHENTICATE_USER)
}
