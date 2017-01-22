import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import About from '../components/About';
import Help from '../components/Help';
import Machine from '../components/configurations/Machine';
import Kit from '../components/configurations/Kit';
import Container from '../components/configurations/Container';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/help', component: Help },
    { path: '/configuration/machine/:machine', component: Machine },
    { path: '/configuration/kit/:kit', component: Kit },
    { path: '/configuration/container/:container', component: Container },
    { path: '*', redirect: '/' },
  ],
});
