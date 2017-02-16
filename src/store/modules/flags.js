const state = {
  flags: {
    active: {
      kit: '',
      container: '',
      dataStore: '',
      messageBroker: '',
      searchEngine: '',
    },
  },
};

const mutations = {
  SET_FLAGS: (state, presets) => {
    state.flags.active.kit = Object.keys(presets.kits)[0];
  },

  SET_ACTIVE_KIT: (state, kit) => {
    state.flags.active.kit = kit;
  },
};

const actions = {
  SET_ACTIVE_KIT: ({ commit }, kit) => {
    commit('SET_ACTIVE_KIT', kit);
  },
};

const getters = {
  flags(state) {
    return state.flags;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
