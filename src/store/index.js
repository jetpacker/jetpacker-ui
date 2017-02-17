import Vue from 'vue';
import Vuex from 'vuex';

import http from './http';

import presets from './modules/presets';
import flags from './modules/flags';
import values from './modules/values';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    presets,
    flags,
    values,
  },

  actions: {
    INITIALIZE: ({ commit, state }) => {
      http
        .get('generator')
        .then((response) => {
          commit('SET_PRESETS', response.data);
          commit('SET_FLAGS', state.presets);
          commit('SET_VALUES', state.presets);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
