import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import About from '../components/About';
import Help from '../components/Help';
import Machine from '../components/settings/Machine';
import Kit from '../components/settings/Kit';
import Container from '../components/settings/Container';
import Builder from '../components/tools/Builder';
import Main from '../components/Main';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
      path: '/tools/builder',
      component: Main,
      children: [
        { path: '', component: Builder },
        { path: '/settings/machine', component: Machine },
        { path: '/settings/kits', component: Kit },
        { path: '/settings/containers/:type', component: Container },
      ],
    },
    { path: '/help', component: Help },

    { path: '*', redirect: '/' },
  ],
});

export default router;
