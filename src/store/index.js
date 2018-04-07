import Vue from 'vue';
import Vuex from 'vuex';

// Import GitHub Corners stylesheet.
import VueGitHubCorners from 'vue-gh-corners';
import 'vue-gh-corners/dist/vue-github-corners.css';

import http from './http';

import presets from './modules/presets';
import controls from './modules/controls';
import values from './modules/values';

Vue.use(Vuex);
Vue.use(VueGitHubCorners);

const store = new Vuex.Store({
  modules: {
    presets,
    controls,
    values,
  },
  state: {
    // TODO: If not initialized, show progress bar.
    initialized: false,
  },
  mutations: {
    SET_INITIALIZE: (state) => {
      state.initialized = true;
    },
  },
  actions: {
    initialize: ({ commit, getters }) => {
      if (!getters.initialized) {
        http
          .get('generator')
          .then((response) => {
            commit('SET_PRESETS', response.data);
            commit('SET_CONTROLS', getters.presets);
            commit('SET_VALUES', getters.presets);
            commit('SET_INITIALIZE');
          })
          .catch((error) => {
            console.log('Error', error);
          });
      }
    },
    resetSettings: ({ commit, getters }) => {
      commit('SET_VALUES', getters.presets);
    },
    buildJetpack: ({ getters }) => {
      http
        .post('generator', getters.payload, { responseType: 'arraybuffer' })
        .then((response) => {
          console.log('Response', response);
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'jetpack';
          link.click();
        })
        .catch((error) => {
          console.log('Error', error);
        });
    },
  },
  getters: {
    initialized(state) {
      return state.initialized;
    },
  },
});

export default store;
