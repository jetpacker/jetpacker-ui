import http from '../http';

const state = {
  presets: {
    machine: {},
    kits: {
      packages: {},
      activePackage: '',
    },
    containers: {
      activeType: '',
      dataStores: {
        packages: {},
        activePackage: '',
      },
      messageBrokers: {
        packages: {},
        activePackage: '',
      },
      searchEngines: {
        packages: {},
        activePackage: '',
      },
    },
  },
};

const mutations = {
  SET_DEFAULTS: (state, defaults) => {
    state.presets.machine = defaults.machine;

    const kits = state.presets.kits;

    Object.keys(defaults.kits).forEach((key) => {
      kits.packages[key] = defaults.kits[key];
    });

    const key = Object.keys(kits.packages)[0];
    kits.packages[key].active = true;
    kits.activePackage = key;

    console.log('kits', kits);
  },

  SET_ACTIVE_PACKAGE_FOR_KITS: (state, activePackage) => {
    const kits = state.presets.kits;
    kits.packages[activePackage].active = true;
    kits.activePackage = activePackage;
  },
};

const actions = {
  SET_DEFAULTS: ({ commit }) => {
    http
      .get('generator')
      .then((response) => {
        commit('SET_DEFAULTS', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  SET_ACTIVE_PACKAGE_FOR_KITS: ({ commit }, activePackage) => {
    commit('SET_ACTIVE_PACKAGE_FOR_KITS', activePackage);
  },
};

const getters = {
  presets(state) {
    return state.presets;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
