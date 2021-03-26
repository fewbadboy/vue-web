import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import i18n from './lang'
import './icons' // icon

import './permission' // permission control

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
