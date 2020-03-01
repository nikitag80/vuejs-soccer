import Vue from 'vue'
import VueMaterial from 'vue-material'
import VeeValidate from 'vee-validate';

import store from './__data__/store'

import App from './App.vue'
import router from './router'


Vue.use(VueMaterial);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')