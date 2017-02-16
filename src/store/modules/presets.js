const state = {
  presets: {
    machine: {},
    kits: {},
    containers: {
      dataStores: {},
      messageBrokers: {},
      searchEngines: {},
    },
  },
};

const mutations = {
  SET_PRESETS: (state, data) => {
    state.presets.machine = data.machine;
    state.presets.kits = data.kits;

    console.log('kits', state.presets.kits);
  },
};

const actions = {
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
