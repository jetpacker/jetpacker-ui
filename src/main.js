// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
});

Vue.prototype.$http = instance;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
});
