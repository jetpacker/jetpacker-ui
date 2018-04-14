import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About';
import Guide from '../components/guide/Guide';
import Machine from '../components/builder/configuration/Machine';
import Kit from '../components/builder/configuration/Kit';
import Container from '../components/builder/configuration/Container';
import Builder from '../components/builder/Builder';
import Configuration from '../components/builder/configuration/Configuration';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Configuration,
      children: [
        { path: '/', component: Builder },
        { path: '/configuration/machine', component: Machine },
        { path: '/configuration/kits', component: Kit },
        { path: '/configuration/containers/:type', component: Container },
      ],
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/guide',
      component: Guide,
    },

    { path: '*', redirect: '/' },
  ],
});

export default router;
