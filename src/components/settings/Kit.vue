<template>
  <div class="main-wrapper">
    <div class="panel with-nav-tabs panel-primary">
      <div class="panel-heading">
        <ul class="nav nav-tabs">
          <li v-for="kit in kits"
              :class="{ active: kit.name == activeKit.name }">
            <a data-toggle="tab" href=""
               @click.prevent="setActive(kit.name)">{{ kit.label }}</a>
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
                  <h4>
                    <label for="version" class="control-label col-md-2">
                      {{ activeKit.version.label }}
                    </label>
                  </h4>
                  <div class="col-md-4">
                    <select class="form-control" id="version"
                            name="version"
                            :disabled="!install"
                            @input="update">
                      <option v-for="option in activeKit.version.options"
                              :value="option.value"
                              :selected="version == option.value">
                        {{ option.label ? option.label : option.value }}
                      </option>
                    </select>
                  </div>
                </template>
              </div>

              <div class="checkbox col-md-3 pull-right clear-right">
                <h4>
                  <label>
                    <input id="install" type="checkbox"
                           name="install"
                           :value="true"
                           :checked="install"
                           @change="update">
                    <strong>{{ activeKit.install.label }}</strong>
                  </label>
                </h4>
              </div>

              <div class="clearfix"></div>

              <template v-if="activeKit.extensions">
                <fieldset>
                  <legend class="text-muted">
                    <i class="fa fa-puzzle-piece fa-lg"></i>
                    Extensions
                  </legend>
                  <div class="form-group">
                    <div class="col-md-6 extensions" v-for="extension in activeKit.extensions">
                      <div class="checkbox col-md-6">
                        <label :title="extension.description">
                          <input type="checkbox"
                                 :name="extension.name + '.install'"
                                 :value="true"
                                 :disabled="!install"
                                 :checked="extensions[extension.name].install"
                                 @change="updateExtension">
                          <strong>{{ extension.label }}</strong>
                        </label>
                      </div>
                      <div class="col-md-6">
                        <select class="form-control"
                                :name="extension.name + '.version' "
                                :disabled="!install || !extensions[extension.name].install"
                                @input="updateExtension">
                          <option v-for="option in extension.version.options"
                                  :value="option.value"
                                  :selected="extensions[extension.name].version == option.value">
                            {{ option.label ? option.label : option.value }}
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
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'presets',
        'values',
        'tabs',
      ]),
      kits() {
        return this.presets.kits;
      },
      activeKit() {
        return this.presets.kits[this.tabs.kit];
      },
      version() {
        return this.values.kits[this.tabs.kit].version;
      },
      install() {
        return this.values.kits[this.tabs.kit].install;
      },
      extensions() {
        return this.values.kits[this.tabs.kit].extensions;
      },
    },
    methods: {
      ...mapActions({
        setActive: 'setActiveKit',
      }),
      ...mapActions([
        'updateKit',
        'updateKitExtension',
      ]),
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

        this.updateKit(payload);
      },
      updateExtension(input) {
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

        this.updateKitExtension(payload);
      },
    },
  };
</script>

<style scoped>
  @import url("/static/styles/tabbedPanel.css");
  @import url("/static/styles/setting.css");
</style>
