import store from 'renderer/vuex/store'
import { find } from 'lodash'
import router from 'renderer/router'
import notie from 'notie'

export default function authService ({ login, password }) {
  const users = store.getters.users
  const user = find(users, { login, password })

  if (!user) {
    notie.alert({ text: 'Incorrect username / password', type: 'error' })
  } else {
    store.dispatch('authenticate', { user }).then(() => {
      router.replace('/')
    })
  }
}
