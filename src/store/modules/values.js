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

    // Use Vue.set will make nested maps reactive
    Vue.set(machine, 'box', Object.keys(presets.machine.box.releases)[0]);
    Vue.set(machine, 'memory', presets.machine.memory.value);
    Vue.set(machine, 'timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);

    Object.values(presets.kits).forEach((kit) => {
      Vue.set(kits, kit.name, {});
      Vue.set(kits[kit.name], 'version', kit.version ? kit.version.releases[0] : '');
      Vue.set(kits[kit.name], 'install', kit.install.value ? Boolean(kit.install.value) : false);

      if (kit.extensions) {
        Vue.set(kits[kit.name], 'extensions', {});
        const extensions = kits[kit.name].extensions;

        kit.extensions.forEach((extension) => {
          Vue.set(extensions, extension.name, {});
          Vue.set(extensions[extension.name], 'install', false);
          Vue.set(extensions[extension.name], 'version', extension.version.releases[0]);
        });
      }
    });

    Object.values(presets.containers).forEach((container) => {
      Vue.set(containers, container.name, {});
      Vue.set(containers[container.name], 'install', false);
      Vue.set(containers[container.name], 'version', container.version.releases[0]);

      if (container.parameters) {
        Vue.set(containers[container.name], 'parameters', {});
        const parameters = containers[container.name].parameters;

        container.parameters.forEach((parameter) => {
          Vue.set(parameters, parameter.name, parameter.value);
        });
      }
    });
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
  UPDATE_KIT: ({ commit }, payload) => {
    commit('UPDATE_KIT', payload);
  },
  UPDATE_KIT_EXTENSION: ({ commit }, payload) => {
    commit('UPDATE_KIT_EXTENSION', payload);
  },
  UPDATE_CONTAINER: ({ commit }, payload) => {
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
