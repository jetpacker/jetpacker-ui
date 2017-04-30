import Vue from 'vue';

const state = {
  machine: {},
  kits: {},
  containers: {},
};

const mutations = {
  SET_VALUES: (state, presets) => {
    const machine = state.machine;
    const kits = state.kits;
    const containers = state.containers;

    // Use Vue.set(map, key, value) will make nested maps reactive
    Vue.set(machine, 'box', presets.machine.box.options[0].value);
    Vue.set(machine, 'memory', presets.machine.memory.value);
    Vue.set(machine, 'timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);

    Object.values(presets.kits).forEach((kit) => {
      Vue.set(kits, kit.name, {});
      Vue.set(kits[kit.name], 'version', kit.version ? kit.version.options[0].value : '');
      Vue.set(kits[kit.name], 'install', kit.install.value ? Boolean(kit.install.value) : false);

      if (kit.extensions) {
        Vue.set(kits[kit.name], 'extensions', {});
        const extensions = kits[kit.name].extensions;

        kit.extensions.forEach((extension) => {
          Vue.set(extensions, extension.name, {});
          Vue.set(extensions[extension.name], 'install', false);
          Vue.set(extensions[extension.name], 'version', extension.version.options[0].value);
        });
      }
    });

    Object.values(presets.containers).forEach((container) => {
      Vue.set(containers, container.name, {});
      Vue.set(containers[container.name], 'install', false);
      Vue.set(containers[container.name], 'version', container.version.options[0].value);

      if (container.parameters) {
        Vue.set(containers[container.name], 'parameters', {});
        const parameters = containers[container.name].parameters;

        container.parameters.forEach((parameter) => {
          Vue.set(parameters, parameter.name, parameter.value);
        });
      }
    });
  },
  UPDATE_MACHINE: (state, payload) => {
    state.machine[payload.attribute] = payload.value;
  },
  UPDATE_KIT: (state, payload) => {
    state.kits[payload.name][payload.attribute] = payload.value;
  },
  UPDATE_KIT_EXTENSION: (state, payload) => {
    const kit = state.kits[payload.name];
    const extension = payload.extension;
    kit.extensions[extension.name][extension.attribute] = extension.value;
  },
  UPDATE_CONTAINER: (state, payload) => {
    state.containers[payload.name][payload.attribute] = payload.value;
  },
  UPDATE_CONTAINER_PARAMETER: (state, payload) => {
    const container = state.containers[payload.name];
    const parameter = payload.parameter;
    container.parameters[parameter.name] = parameter.value;
  },
};

const actions = {
  updateMachine: ({ commit }, payload) => {
    commit('UPDATE_MACHINE', payload);
  },
  updateKit: ({ commit }, payload) => {
    commit('UPDATE_KIT', payload);
  },
  updateKitExtension: ({ commit }, payload) => {
    commit('UPDATE_KIT_EXTENSION', payload);
  },
  updateContainer: ({ commit }, payload) => {
    commit('UPDATE_CONTAINER', payload);
  },
  updateContainerParameter: ({ commit }, payload) => {
    commit('UPDATE_CONTAINER_PARAMETER', payload);
  },
};

const getters = {
  values(state) {
    return state;
  },
  chosenKits(state) {
    const results = {};
    const kits = state.kits;
    const chosenKits = Object.keys(kits)
                             .filter(key => kits[key].install === true);

    chosenKits.forEach((chosenKit) => {
      const kit = kits[chosenKit];

      results[chosenKit] = {
        version: kit.version,
        extensions: null,
      };

      if (kit.extensions) {
        results[chosenKit].extensions = {};

        const chosenExtensions = Object.keys(kit.extensions)
                                       .filter(key => kit.extensions[key].install === true);

        chosenExtensions.forEach((chosenExtension) => {
          results[chosenKit].extensions[chosenExtension] = kit.extensions[chosenExtension].version;
        });
      }
    });

    return results;
  },
  chosenContainers(state) {
    const results = {};
    const containers = state.containers;
    const chosenContainers = Object.keys(containers)
                                   .filter(key => containers[key].install === true);

    chosenContainers.forEach((chosenContainer) => {
      const container = containers[chosenContainer];

      results[chosenContainer] = {
        version: container.version,
        parameters: null,
      };

      if (container.parameters) {
        results[chosenContainer].parameters = container.parameters;
      }
    });
    return results;
  },
  payload(state, getters) {
    const kits = getters.chosenKits;
    const containers = getters.chosenContainers;

    const body = {
      machine: state.machine,
      kits: {},
      containers: {},
    };

    Object.keys(kits).forEach((key) => {
      const kit = kits[key];

      body.kits[key] = {
        version: kit.version ? kit.version : null,
        extensions: kit.extensions ? kit.extensions : null,
      };
    });

    Object.keys(containers).forEach((key) => {
      const container = containers[key];

      body.containers[key] = {
        version: container.version ? container.version : null,
        env: container.parameters ? container.parameters : null,
      };
    });

    return body;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
