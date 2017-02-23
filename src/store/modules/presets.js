const state = {
  machine: {},
  kits: {},
  containers: {},
};

const mutations = {
  SET_PRESETS: (state, data) => {
    state.machine = data.machine;
    state.kits = data.kits;
    state.containers = data.containers;
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
