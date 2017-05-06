import Router from 'vue-router'
import store from './vuex/store'

const routes = [
  {
    path: '/sign_in',
    name: 'Sign In',
    component: require('components/SignInView'),
    meta: { requiresLogin: false }
  },
  {
    path: '/',
    name: 'Welcome',
    component: require('components/HomePage'),
    meta: { requiresLogin: true }
  },
  {
    path: '/books',
    name: 'Books',
    component: require('components/BooksView'),
    meta: { requiresLogin: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: require('components/UsersView'),
    meta: { requiresLogin: true }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.auth.isAuthenticated
  if (to.matched.some(record => record.meta.requiresLogin) && !isAuthenticated) {
    next('/sign_in')
  } else {
    next()
  }
})

export default router
