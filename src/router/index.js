import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import About from '../components/About';
import Help from '../components/Help';
import Machine from '../components/configurations/Machine';
import Kit from '../components/configurations/Kit';
import Container from '../components/configurations/Container';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/help', component: Help },

    { path: '/configuration/machine', component: Machine },
    { path: '/configuration/kits', component: Kit },
    { path: '/configuration/containers/:type', component: Container },

    { path: '*', redirect: '/' },
  ],
});

export default router;
