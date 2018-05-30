// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import english from './translations/english'
import spanish from './translations/spanish'
import vuexI18n from 'vuex-i18n'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VSelect,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'

import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VSelect,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.use(Vuex)
Vue.config.productionTip = false
var userLang = navigator.language || navigator.userLanguage
const store = new Vuex.Store()
Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('en', english)
Vue.i18n.add('es', spanish)
Vue.i18n.set(userLang)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
