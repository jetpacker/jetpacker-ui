import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import About from '../components/About';
import Help from '../components/Help';
import Machine from '../components/settings/Machine';
import Kit from '../components/settings/Kit';
import Container from '../components/settings/Container';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/help', component: Help },

    { path: '/setting/machine', component: Machine },
    { path: '/setting/kits', component: Kit },
    { path: '/setting/containers/:type', component: Container },

    { path: '*', redirect: '/' },
  ],
});

export default router;
