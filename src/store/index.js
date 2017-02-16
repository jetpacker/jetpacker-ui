import Vue from 'vue';
import Vuex from 'vuex';

import panels from './modules/panels';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    panels,
  },
});

export default store;
