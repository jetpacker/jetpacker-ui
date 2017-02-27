import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import About from '../components/About';
import Help from '../components/Help';
import Machine from '../components/settings/Machine';
import Kit from '../components/settings/Kit';
import Container from '../components/settings/Container';
import Summary from '../components/summary/Summary';
import Builder from '../components/Builder';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
      path: '/builder',
      component: Builder,
      children: [
        { path: '', component: Summary },
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
