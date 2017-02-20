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
  UPDATE_KIT: (state, payload) => {
    console.log('payload', payload);
    state.kits[payload.name][payload.attribute] = payload.value;
    console.log('kits@values', state.kits);
  },
  UPDATE_KIT_EXTENSION: (state, payload) => {
    const kit = state.kits[payload.name];
    const extension = payload.extension;
    kit.extensions[extension.name][extension.attribute] = extension.value;
  },
  UPDATE_CONTAINER: (state, payload) => {
    console.log('payload', payload);
    state.containers[payload.name][payload.attribute] = payload.value;
  },
  UPDATE_CONTAINER_PARAMETER: (state, payload) => {
    const container = state.containers[payload.name];
    const parameter = payload.parameter;
    container.parameters[parameter.name] = parameter.value;
  },
};

const actions = {
  UPDATE_KIT: ({ commit }, payload) => {
    commit('UPDATE_KIT', payload);
  },
  UPDATE_KIT_EXTENSION: ({ commit }, payload) => {
    commit('UPDATE_KIT_EXTENSION', payload);
  },
  UPDATE_CONTAINER: ({ commit }, payload) => {
    console.log('hello');
    commit('UPDATE_CONTAINER', payload);
  },
  UPDATE_CONTAINER_PARAMETER: ({ commit }, payload) => {
    commit('UPDATE_CONTAINER_PARAMETER', payload);
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
  actions,
  getters,
};
