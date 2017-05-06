import Vue from 'vue'
import * as types from '../mutation-types'
import { findIndex, find } from 'lodash'
import uuid from 'uuid/v4'

const state = [
  {
    bookId: '123',
    name: 'Foo',
    author: 'Bar',
    publishYear: '1234',
    reservator: 'admin'
  },
  {
    bookId: '456',
    name: 'Azazaza',
    author: 'qqqq',
    publishYear: '1234',
    reservator: null
  }
]

const mutations = {
  [types.ADD_BOOK] (state, bookData) {
    const book = {
      ...bookData,
      bookId: uuid(),
      reservator: null
    }
    state.push(book)
  },
  [types.EDIT_BOOK] (state, book) {
    const index = findIndex(state, { bookId: book.bookId })
    Vue.set(state, index, book)
  },
  [types.REMOVE_BOOK] (state, book) {
    const index = findIndex(state, { bookId: book.bookId })
    state.splice(index, 1)
  },
  [types.RESERVE_BOOK] (state, { book, user }) {
    const bookToMutate = find(state, { bookId: book.bookId })
    bookToMutate.reservator = user.login
  },
  [types.RETURN_BOOK] (state, book) {
    const bookToMutate = find(state, { bookId: book.bookId })
    bookToMutate.reservator = null
  }
}

export default {
  state,
  mutations
}
