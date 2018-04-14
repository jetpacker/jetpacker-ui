// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import VueGitHubCorners from 'vue-gh-corners';
import 'vue-gh-corners/dist/vue-github-corners.css';

import App from './App';
import router from './router';
import store from './store';


Vue.use(VueGitHubCorners);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
});
