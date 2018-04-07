import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About';
import Help from '../components/Help';
import Machine from '../components/setting/Machine';
import Kit from '../components/setting/Kit';
import Container from '../components/setting/Container';
import Builder from '../components/builder/Builder';
import Configuration from '../components/Configuration';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/configuration/builder',
      component: Configuration,
      alias: '/',
      children: [
        { path: '/configuration/builder', component: Builder },
        { path: '/configuration/setting/machine', component: Machine },
        { path: '/configuration/setting/kits', component: Kit },
        { path: '/configuration/setting/containers/:type', component: Container },
      ],
    },
    { path: '/about', component: About },
    { path: '/help', component: Help },

    { path: '*', redirect: '/' },
  ],
});

export default router;
