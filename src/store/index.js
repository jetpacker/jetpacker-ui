import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    virtualMachines: {},
    developmentKits: {},
    databaseServers: [],
    messageBrokers: [],
    searchEngines: [],
  },
  actions: {},
  mutations: {},
  getters: {},
});

export default store;
