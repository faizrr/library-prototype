import * as types from './mutation-types'

// Auth
export const authenticate = ({ commit }, { user }) => {
  commit(types.AUTHENTICATE_USER, user)
}
export const logOut = ({ commit }) => {
  commit(types.LOG_OUT)
}

// Books
export const addBook = ({ commit }, book) => {
  commit(types.ADD_BOOK, book)
}
export const editBook = ({ commit }, book) => {
  commit(types.EDIT_BOOK, book)
}
export const removeBook = ({ commit }, book) => {
  commit(types.REMOVE_BOOK, book)
}
