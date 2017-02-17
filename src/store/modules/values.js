const state = {
  machine: {},
  kits: {},
  containers: {},
};

const mutations = {
  SET_VALUES: (state, presets) => {
    Object.values(presets.kits).forEach((kit) => {
      const version = kit.version;
      const install = kit.install;
      const extensions = kit.extensions;

      state.kits[kit.name] = {
        version: version != null ? version.value : null,
        install: install.value,
      };

      if (extensions) {
        state.kits[kit.name].extensions = {};
        extensions.forEach((extension) => {
          state.kits[kit.name]
               .extensions[extension.name] = { install: false, value: '' };
        });
      }
    });

    console.log('state.kits', state.kits);

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
