const state = {
  machine: {},
  kits: {},
  containers: {
    dataStores: {},
    messageBrokers: {},
    searchEngines: {},
  },
};

const mutations = {
  SET_PRESETS: (state, data) => {
    state.machine = data.machine;
    state.kits = data.kits;

    console.log('kits', state.kits);
  },
};

const getters = {
  presets(state) {
    return state;
  },
};

export default {
  state,
  mutations,
  getters,
};
