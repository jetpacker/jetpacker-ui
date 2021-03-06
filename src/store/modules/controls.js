const state = {
  home: false,
  menus: {
    builder: [
      {
        VirtualMachine: {
          active: false,
          label: 'Virtual Machine',
          url: '/configuration/machine',
          icon: 'fa-desktop',
        },
        DevelopmentKit: {
          active: false,
          label: 'Development Kits',
          url: '/configuration/kits',
          icon: 'fa-code',
        },
        DataStore: {
          active: false,
          label: 'Data Stores',
          url: '/configuration/containers/DataStore',
          icon: 'fa-database',
        },
        MessageBroker: {
          active: false,
          label: 'Message Brokers',
          url: '/configuration/containers/MessageBroker',
          icon: 'fa-exchange',
        },
        SearchEngine: {
          active: false,
          label: 'Search Engines',
          url: '/configuration/containers/SearchEngine',
          icon: 'fa-search',
        },
        Builder: {
          active: false,
          label: 'Builder',
          url: '/',
          icon: 'fa-industry',
        },
      },
    ],
    guide: [
      {
        Introduction: {
          active: false,
          label: 'What is jetpackr',
          url: '/guide/Introduction',
          icon: 'fa-question',
        },
        QuickStart: {
          active: false,
          label: 'Quick Start',
          url: '/guide/QuickStart',
          icon: 'fa-fighter-jet',
        },
        Linux: {
          active: false,
          label: 'Linux',
          url: '/guide/Linux',
          icon: 'fa-linux',
        },
        MacOS: {
          active: false,
          label: 'macOS',
          url: '/guide/MacOS',
          icon: 'fa-apple',
        },
        Windows: {
          active: false,
          label: 'Windows',
          url: '/guide/Windows',
          icon: 'fa-windows',
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
    // Set initial tab for Kits (SDKs)
    state.tabs.kit = Object.keys(presets.kits)[0];

    // Set initial tab for Containers
    const containers = Object.values(presets.containers);
    state.tabs.container = {
      DataStore: containers.filter(container => container.type === 'DataStore')[0].name,
      MessageBroker: containers.filter(container => container.type === 'MessageBroker')[0].name,
      SearchEngine: containers.filter(container => container.type === 'SearchEngine')[0].name,
    };
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
    state.home = true;
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
    state.home = false;
  },
};

const actions = {
  setActiveKit: ({ commit }, kit) => {
    commit('SET_ACTIVE_KIT', kit);
  },
  setActiveContainer: ({ commit }, payload) => {
    commit('SET_ACTIVE_CONTAINER', payload);
  },
  setActiveMenu: ({ commit }, payload) => {
    commit('RESET_MENUS');
    commit('SET_ACTIVE_MENU', payload);
  },
  resetActiveMenus: ({ commit }) => {
    commit('RESET_MENUS');
  },
};

const getters = {
  home(state) {
    return state.home;
  },
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
