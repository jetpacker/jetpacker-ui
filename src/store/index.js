import Vue from 'vue';
import Vuex from 'vuex';

import defaults from './modules/presets';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    defaults,
  },
});

export default store;
