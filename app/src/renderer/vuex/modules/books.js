import * as types from '../mutation-types'

const state = [
  {
    name: 'Foo',
    author: 'Bar',
    publishYear: '1234'
  },
  {
    name: 'Azazaza',
    author: 'qqqq',
    publishYear: '1234'
  }
]

const mutations = {
  [types.ADD_BOOK] (state, book) {
    state.push(book)
  }
}

export default {
  state,
  mutations
}
