import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'notie/dist/notie.css'

import App from './App'
import router from './router'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.use(VueMaterial)
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
