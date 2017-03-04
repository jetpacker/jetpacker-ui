const state = {
  menus: {
    side: [
      {
        VirtualMachine: {
          active: false,
          label: 'Virtual Machine',
          url: '/builder/settings/machine',
          icon: 'fa-desktop',
        },
        DevelopmentKit: {
          active: false,
          label: 'Development Kits',
          url: '/builder/settings/kits',
          icon: 'fa-code',
        },
        DataStore: {
          active: false,
          label: 'Data Stores',
          url: '/builder/settings/containers/DataStore',
          icon: 'fa-database',
        },
        MessageBroker: {
          active: false,
          label: 'Message Brokers',
          url: '/builder/settings/containers/MessageBroker',
          icon: 'fa-exchange',
        },
        SearchEngine: {
          active: false,
          label: 'Search Engines',
          url: '/builder/settings/containers/SearchEngine',
          icon: 'fa-search',
        },
      },
      {
        BuildSummary: {
          active: false,
          label: 'Build Summary',
          url: '/builder',
          icon: 'fa-book',
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
