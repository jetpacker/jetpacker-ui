const state = {
  active: {
    kit: '',
    container: {
      DataStore: '',
      MessageBroker: '',
      SearchEngine: '',
    },
  },
};

const mutations = {
  SET_FLAGS: (state, presets) => {
    state.active.kit = Object.keys(presets.kits)[0];

    const containers = Object.values(presets.containers);
    state.active.container = {
      DataStore: containers.filter(container => container.type === 'DataStore')[0].name,
      MessageBroker: containers.filter(container => container.type === 'MessageBroker')[0].name,
      SearchEngine: containers.filter(container => container.type === 'SearchEngine')[0].name,
    };

    console.log('state.active.container', state.active.container);
  },

  SET_ACTIVE_KIT: (state, kit) => {
    state.active.kit = kit;
  },
  SET_ACTIVE_CONTAINER: (state, container) => {
    state.active.container = container;
  },
};

const actions = {
  SET_ACTIVE_KIT: ({ commit }, kit) => {
    commit('SET_ACTIVE_KIT', kit);
  },
  SET_ACTIVE_CONTAINER: ({ commit }, container) => {
    commit('SET_ACTIVE_CONTAINER', container);
  },
};

const getters = {
  flags(state) {
    return state;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
