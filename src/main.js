import Vue from 'vue'

import Cookies from 'js-cookie'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import App from './App.vue'

import i18n from './lang'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value) 
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
