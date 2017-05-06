import Vue from 'vue'
import * as types from '../mutation-types'
import { findIndex } from 'lodash'
import uuid from 'uuid/v4'

const state = [
  {
    bookId: '123',
    name: 'Foo',
    author: 'Bar',
    publishYear: '1234'
  },
  {
    bookId: '456',
    name: 'Azazaza',
    author: 'qqqq',
    publishYear: '1234'
  }
]

const mutations = {
  [types.ADD_BOOK] (state, bookData) {
    const book = {
      ...bookData,
      bookId: uuid()
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
