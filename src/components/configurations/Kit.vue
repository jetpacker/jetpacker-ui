<template>
  <div class="panel with-nav-tabs panel-default">
    <div class="panel-heading">
      <ul class="nav nav-tabs">
        <li v-for="package in packages" :class="{ active: package.name == activePackage.name }">
          <a data-toggle="tab" href="" @click.prevent="setActivePackage(package.name)">{{ package.label }}</a>
        </li>
      </ul>
    </div>

    <div class="panel-body">
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <p class="text-muted">
            {{ activePackage.description }}
          </p>
          <div class="form-horizontal">
            <div class="form-group col-xs-9">
              <template v-if="activePackage.version">
                <label for="version" class="control-label col-sm-2">Version</label>
                <div class="col-sm-3">
                  <select class="form-control" id="version">
                    <option v-for="release in activePackage.version.releases">{{ release }}</option>
                  </select>
                </div>
              </template>
            </div>

            <div class="checkbox col-xs-3 pull-right">
              <label>
                <input id="install" type="checkbox" :checked="activePackage.install.value == 'true'">
                <strong>{{ activePackage.install.label }}</strong>
              </label>
            </div>

            <template v-if="activePackage.extensions">
              <div class="clearfix"></div>

              <fieldset>
                <legend class="text-muted">Extensions</legend>
                <div class="form-group col-sm-6" v-for="extension in activePackage.extensions">
                  <div class="checkbox col-sm-6">
                    <label>
                      <input type="checkbox">
                      <strong>{{ extension.label }}</strong>
                    </label>
                  </div>
                  <div class="col-sm-6">
                    <select class="form-control">
                      <option v-for="release in extension.version.releases">{{ release }}</option>
                    </select>
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
      packages() {
        return this.$store.getters.presets.kits.packages;
      },
      activePackage() {
        const activePackage = this.$store.getters.presets.kits.activePackage;
        return this.$store.getters.presets.kits.packages[activePackage];
      },
    },

    methods: {
      setActivePackage(activePackage) {
        this.$store.dispatch('SET_ACTIVE_PACKAGE_FOR_KITS', activePackage);
      },
    },
  };
</script>

<style scoped>
  .panel.with-nav-tabs .panel-heading{
    padding: 5px 5px 0 5px;
  }
  .panel.with-nav-tabs .nav-tabs{
    border-bottom: none;
  }
</style>
