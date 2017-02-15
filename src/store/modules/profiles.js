import http from '../http';

const state = {
  profiles: {
    machine: {},
    kits: {},
    containers: {},
  },
};

const mutations = {
  SET_PROFILES: (state, profiles) => {
    state.profiles = profiles;
  },
};

const actions = {
  INITIALIZE: ({ commit }) => {
    http
      .get('generator')
      .then((response) => {
        console.log(response.data);
        commit('SET_PROFILES', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
