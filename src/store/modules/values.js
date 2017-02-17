const state = {
  machine: {},
  kits: {},
  containers: {},
};

const mutations = {
  SET_VALUES: (state, presets) => {
    state.machine = {
      box: Object.keys(presets.machine.box.releases)[0],
      memory: presets.machine.memory.value,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    Object.values(presets.kits).forEach((kit) => {
      state.kits[kit.name] = {
        version: kit.version ? kit.version.releases[0] : '',
        install: kit.install.value ? Boolean(kit.install.value) : false,
      };

      if (kit.extensions) {
        state.kits[kit.name].extensions = {};
        kit.extensions.forEach((extension) => {
          state.kits[kit.name].extensions[extension.name] = {
            install: false,
            version: extension.version.releases[0],
          };
        });
      }
    });

    Object.values(presets.containers).forEach((container) => {
      state.containers[container.name] = {
        install: false,
        version: container.version.releases[0],
      };

      if (container.parameters) {
        state.containers[container.name].parameters = {};
        container.parameters.forEach((parameter) => {
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
