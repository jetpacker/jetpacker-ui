const state = {
  machine: {},
  kits: {},
  containers: {},
};

const mutations = {
  SET_VALUES: (state, presets) => {
    Object.values(presets.containers).forEach((container) => {
      const version = container.version;
      const install = container.install;
      const parameters = container.parameters;

      state.containers[container.name] = {
        version: version.value,
        install: install.value,
      };

      if (parameters) {
        state.containers[container.name].parameters = {};
        parameters.forEach((parameter) => {
          state.containers[container.name]
               .parameters[parameter.name] = parameter.value;
        });
      }
    });
  },
};

const getters = {
  values(state) {
    return state;
  },
};

export default {
  state,
  mutations,
  getters,
};
