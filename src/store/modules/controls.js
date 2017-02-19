const state = {
  menus: {
    side: [
      {
        virtualMachine: {
          active: false,
          label: 'Virtual Machine',
          url: '/settings/machine',
        },
        developmentKits: {
          active: false,
          label: 'Development Kits',
          url: '/settings/kits',
        },
        dataStores: {
          active: false,
          label: 'Data Stores',
          url: '/settings/containers/DataStore',
        },
        messageBrokers: {
          active: false,
          label: 'Message Brokers',
          url: '/settings/containers/MessageBroker',
        },
        searchEngines: {
          active: false,
          label: 'Search Engines',
          url: '/settings/containers/SearchEngine',
        },
      },
      {
        build: {
          active: false,
          label: 'Build Jetpack',
          url: '/tools/build',
        },
        reset: {
          active: false,
          label: 'Reset Settings',
          url: '/tools/reset',
        },
      },
    ],
  },
  tabs: {
    kit: '',
    container: {
      DataStore: '',
      MessageBroker: '',
      SearchEngine: '',
    },
  },
};

const mutations = {
  SET_CONTROLS: (state, presets) => {
    state.tabs.kit = Object.keys(presets.kits)[0];

    const containers = Object.values(presets.containers);
    state.tabs.container = {
      DataStore: containers.filter(container => container.type === 'DataStore')[0].name,
      MessageBroker: containers.filter(container => container.type === 'MessageBroker')[0].name,
      SearchEngine: containers.filter(container => container.type === 'SearchEngine')[0].name,
    };

    console.log('state.active.container', state.tabs.container);
  },
  SET_ACTIVE_KIT: (state, kit) => {
    state.tabs.kit = kit;
  },
  SET_ACTIVE_CONTAINER: (state, payload) => {
    state.tabs.container[payload.type] = payload.container;
  },
  SET_ACTIVE_MENU(state, payload) {
    const menus = state.menus[payload.location];
    menus.forEach((menu) => {
      if (payload.item in menu) {
        menu[payload.item].active = !menu[payload.item].active;
      }
    });
  },
  RESET_MENUS(state) {
    const locations = Object.keys(state.menus);
    locations.forEach((location) => {
      const menus = state.menus[location];
      menus.forEach((menu) => {
        Object.keys(menu).forEach((item) => {
          menu[item].active = false;
        });
      });
    });
  },
};

const actions = {
  SET_ACTIVE_KIT: ({ commit }, kit) => {
    commit('SET_ACTIVE_KIT', kit);
  },
  SET_ACTIVE_CONTAINER: ({ commit }, payload) => {
    commit('SET_ACTIVE_CONTAINER', payload);
  },
  SET_ACTIVE_MENU: ({ commit }, payload) => {
    commit('RESET_MENUS');
    commit('SET_ACTIVE_MENU', payload);
  },
};

const getters = {
  tabs(state) {
    return state.tabs;
  },
  menus(state) {
    return state.menus;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
