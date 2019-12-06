import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HTTP from './http/api';
import './mock/index';

import './assets/style/reset.scss';
import './assets/style/common.scss';

Vue.config.productionTip = false
Vue.prototype.$http = HTTP;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
