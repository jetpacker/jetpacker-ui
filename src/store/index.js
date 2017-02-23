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
    INITIALIZE: ({ commit, getters }) => {
      http
        .get('generator')
        .then((response) => {
          commit('SET_PRESETS', response.data);
          commit('SET_CONTROLS', getters.presets);
          commit('SET_VALUES', getters.presets);
        })
        .catch((error) => {
          console.log('Error', error);
        });
    },
    RESET_SETTINGS: ({ commit, getters }) => {
      commit('SET_VALUES', getters.presets);
    },
    BUILD_JETPACK: ({ getters }) => {
      http
        .post('generator', getters.payload)
        .then((response) => {
          console.log('Response', response);
        })
        .catch((error) => {
          console.log('Error', error);
        });
    },
  },
});

export default store;
