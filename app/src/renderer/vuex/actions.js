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
export const reserveBook = ({ commit }, payload) => {
  commit(types.RESERVE_BOOK, payload)
}
export const returnBook = ({ commit }, book) => {
  commit(types.RETURN_BOOK, book)
}

// Users
export const createOrUpdateUser = ({ commit }, user) => {
  commit(types.CREATE_OR_UPDATE_USER, user)
}
export const removeUser = ({ commit }, user) => {
  commit(types.REMOVE_USER, user)
}
