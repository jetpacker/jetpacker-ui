import Vue from 'vue';
import Vuex from 'vuex';

import http from './http';

import presets from './modules/presets';
import controls from './modules/controls';
import values from './modules/values';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    presets,
    controls,
    values,
  },

  actions: {
    INITIALIZE: ({ commit, state }) => {
      http
        .get('generator')
        .then((response) => {
          commit('SET_PRESETS', response.data);
          commit('SET_CONTROLS', state.presets);
          commit('SET_VALUES', state.presets);
        })
        .catch((error) => {
          console.log('Error', error);
        });
    },
    RESET_SETTINGS: ({ commit, state }) => {
      commit('SET_VALUES', state.presets);
    },
  },
});

export default store;
