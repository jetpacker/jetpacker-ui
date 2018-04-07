const state = {
  builder: false,
  menus: {
    side: [
      {
        VirtualMachine: {
          active: false,
          label: 'Virtual Machine',
          url: '/configuration/setting/machine',
          icon: 'fa-desktop',
        },
        DevelopmentKit: {
          active: false,
          label: 'Development Kits',
          url: '/configuration/setting/kits',
          icon: 'fa-code',
        },
        DataStore: {
          active: false,
          label: 'Data Stores',
          url: '/configuration/setting/containers/DataStore',
          icon: 'fa-database',
        },
        MessageBroker: {
          active: false,
          label: 'Message Brokers',
          url: '/configuration/setting/containers/MessageBroker',
          icon: 'fa-exchange',
        },
        SearchEngine: {
          active: false,
          label: 'Search Engines',
          url: '/configuration/setting/containers/SearchEngine',
          icon: 'fa-search',
        },
        Builder: {
          active: false,
          label: 'Builder',
          url: '/configuration/builder',
          icon: 'fa-industry',
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
    state.builder = true;
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
    state.builder = false;
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
  builder(state) {
    return state.builder;
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
