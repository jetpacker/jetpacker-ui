<template>
  <div class="panel with-nav-tabs panel-default">
    <div class="panel-heading">
      <ul class="nav nav-tabs">
        <li v-for="kit in kits"
            :class="{ active: kit.name == activeKit.name }">
          <a data-toggle="tab" href=""
             @click.prevent="setActiveKit(kit.name)">{{ kit.label }}</a>
        </li>
      </ul>
    </div>

    <div class="panel-body">
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <p class="text-muted">
            {{ activeKit.description }}
          </p>

          <div class="form-horizontal">
            <div class="form-group col-md-9 clear-left">
              <template v-if="activeKit.version">
                <label for="version" class="control-label col-md-2">
                  {{ activeKit.version.label }}
                </label>
                <div class="col-md-4">
                  <select class="form-control" id="version"
                          name="version"
                          :disabled="!values.install"
                          @input="update">
                    <option v-for="release in activeKit.version.releases"
                            :value="release"
                            :selected="values.version == release">{{ release }}</option>
                  </select>
                </div>
              </template>
            </div>

            <div class="checkbox col-md-3 pull-right clear-right">
              <label>
                <input id="install" type="checkbox"
                       name="install"
                       :value="true"
                       :checked="values.install"
                       @change="update">
                <strong>{{ activeKit.install.label }}</strong>
              </label>
            </div>

            <div class="clearfix"></div>

            <template v-if="activeKit.extensions">
              <fieldset>
                <legend class="text-muted">Extensions</legend>
                <div class="form-group">
                  <div class="col-md-6 extensions" v-for="extension in activeKit.extensions">
                    <div class="checkbox col-md-6">
                      <label>
                        <input type="checkbox"
                               :name="extension.name + '.install'"
                               :value="true"
                               :disabled="!values.install"
                               :checked="values.extensions[extension.name].install"
                               @change="updateExtension">
                        <strong>{{ extension.label }}</strong>
                      </label>
                    </div>
                    <div class="col-md-6">
                      <select class="form-control"
                              :name="extension.name + '.version' "
                              :disabled="!values.install || !values.extensions[extension.name].install"
                              @input="updateExtension">
                        <option v-for="release in extension.version.releases"
                                :value="release"
                                :selected="values.extensions[extension.name].version == release">
                          {{ release }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </fieldset>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      kits() {
        return this.$store.getters.presets.kits;
      },
      activeKit() {
        const kit = this.$store.getters.tabs.kit;
        return this.$store.getters.presets.kits[kit];
      },
      values() {
        const kit = this.$store.getters.tabs.kit;
        return this.$store.getters.values.kits[kit];
      },
    },
    methods: {
      setActiveKit(kit) {
        this.$store.dispatch('SET_ACTIVE_KIT', kit);
      },
      update(input) {
        // TODO: Add binding logic
        const payload = {
          name: this.activeKit.name,
          attribute: input.target.name,
        };

        if (payload.attribute === 'install') {
          payload.value = input.target.checked;
        } else {
          payload.value = input.target.value;
        }

        this.$store.dispatch('UPDATE_KIT', payload);
        this.$forceUpdate();
      },
      updateExtension(input) {
        // TODO: Add binding logic
        const [name, attribute] = input.target.name.split('.');

        const payload = {
          name: this.activeKit.name,
          extension: {
            name,
            attribute,
          },
        };

        if (attribute === 'install') {
          payload.extension.value = input.target.checked;
        } else {
          payload.extension.value = input.target.value;
        }

        this.$store.dispatch('UPDATE_KIT_EXTENSION', payload);
        this.$forceUpdate();
      },
    },
  };
</script>

<style scoped>
  .extensions {
    padding: 0px 0px 12px 0px;
  }

  .panel.with-nav-tabs .panel-heading{
    padding: 5px 5px 0 5px;
  }
  .panel.with-nav-tabs .nav-tabs{
    border-bottom: none;
  }
</style>
