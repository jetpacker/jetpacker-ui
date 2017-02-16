import Vue from 'vue';
import Vuex from 'vuex';

import http from './http';

import flags from './modules/flags';
import presets from './modules/presets';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    presets,
    flags,
  },

  actions: {
    INITIALIZE: ({ commit, state }) => {
      http
        .get('generator')
        .then((response) => {
          commit('SET_PRESETS', response.data);
          commit('SET_FLAGS', state.presets);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
