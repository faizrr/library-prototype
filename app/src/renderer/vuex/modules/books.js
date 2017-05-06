import Vue from 'vue'
import * as types from '../mutation-types'
import { findIndex } from 'lodash'
import uuid from 'uuid/v4'

const state = [
  {
    bookId: '123',
    name: 'Foo',
    author: 'Bar',
    publishYear: '1234',
    isAvailable: true
  },
  {
    bookId: '456',
    name: 'Azazaza',
    author: 'qqqq',
    publishYear: '1234',
    isAvailable: false
  }
]

const mutations = {
  [types.ADD_BOOK] (state, bookData) {
    const book = {
      ...bookData,
      bookId: uuid(),
      isAvailable: true
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
  }
}

export default {
  state,
  mutations
}
