import http from '../http';

const state = {
  panels: {
    machine: {},
    kits: {
      contents: {},
      activeContent: '',
    },
    containers: {
      dataStores: {
        contents: {},
        activeContent: '',
      },
      messageBrokers: {
        contents: {},
        activeContent: '',
      },
      searchEngines: {
        contents: {},
        activeContent: '',
      },
    },
  },

  profiles: {
    machine: {},
    kits: {
      openjdk: {},
      node: {},
      guard: {},
    },
    containers: [],
  },
};

const mutations = {
  SET_PANELS: (state, profiles) => {
    state.panels.machine = profiles.machine;

    const kits = state.panels.kits;

    Object.keys(profiles.kits).forEach((key) => {
      kits.contents[key] = profiles.kits[key];
      kits.contents[key].active = false;
    });
    console.log('kits.contents', kits.contents);

    const key = Object.keys(kits.contents)[0];
    kits.contents[key].active = true;
    kits.activeContent = key;

    console.log('kits.contents', kits.contents);
  },
  SET_PROFILES: (state, profiles) => {
    state.profiles = profiles;
  },
};

const actions = {
  INITIALIZE: ({ commit }) => {
    http
      .get('generator')
      .then((response) => {
        commit('SET_PROFILES', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const getters = {
  profiles(state) {
    return state.profiles;
  },
  panels(state) {
    return state.panels;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
