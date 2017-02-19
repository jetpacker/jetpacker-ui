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
                          :disabled="!install"
                          @input="updateVersion">
                    <option v-for="release in activeKit.version.releases"
                            :value="release"
                            :selected="version == release">{{ release }}</option>
                  </select>
                </div>
              </template>
            </div>

            <div class="checkbox col-md-3 pull-right clear-right">
              <label>
                <input id="install" type="checkbox"
                       name="install"
                       :value="true"
                       :checked="install"
                       @change="updateInstall">
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
                               :disabled="!install"
                               :checked="extensions[extension.name].install"
                               @change="updateExtensions">
                        <strong>{{ extension.label }}</strong>
                      </label>
                    </div>
                    <div class="col-md-6">
                      <select class="form-control"
                              :name="extension.name + '.version' "
                              :disabled="!install || !extensions[extension.name].install"
                              @input="updateExtensions">
                        <option v-for="release in extension.version.releases"
                                :value="release"
                                :selected="extensions[extension.name].version == release">
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
      version() {
        const kit = this.$store.getters.tabs.kit;
        return this.$store.getters.values.kits[kit].version;
      },
      install() {
        const kit = this.$store.getters.tabs.kit;
        return this.$store.getters.values.kits[kit].install;
      },
      extensions() {
        const kit = this.$store.getters.tabs.kit;
        return this.$store.getters.values.kits[kit].extensions;
      },
    },
    methods: {
      setActiveKit(kit) {
        this.$store.dispatch('SET_ACTIVE_KIT', kit);
      },
      updateVersion(input) {
        // TODO: Add binding logic
        console.log('name', input.target.name);
        console.log('version', input.target.value);
      },
      updateInstall(input) {
        // TODO: Add binding logic
        console.log('name', input.target.name);
        console.log('install', input.target.checked);
      },
      updateExtensions(input) {
        // TODO: Add binding logic
        const [extension, attribute] = input.target.name.split('.');

        console.log('extension', extension);
        console.log('attribute', attribute);

        if (attribute === 'install') {
          console.log(attribute, input.target.checked);
        } else {
          console.log(attribute, input.target.value);
        }
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
