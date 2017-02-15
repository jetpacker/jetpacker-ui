import Vue from 'vue';
import Vuex from 'vuex';

import profiles from './modules/profiles';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    profiles,
  },
});

export default store;
