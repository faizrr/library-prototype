import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { remote } from 'electron'
import path from 'path'
import low from 'lowdb'

import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'

Vue.use(Vuex)

const dbPath = path.dirname(remote.app.getAppPath()) + '/db.json'
const db = low(dbPath)

export default new Vuex.Store({
  actions,
  getters,
  modules,
  plugins: [
    createPersistedState({ paths: ['auth'] }),
    createPersistedState({
      paths: ['books', 'users'],
      getState: (key) => db.get(key).value(),
      setState: (key, state) => { db.set(key, state).write() }
    })
  ],
  strict: process.env.NODE_ENV !== 'production'
})
