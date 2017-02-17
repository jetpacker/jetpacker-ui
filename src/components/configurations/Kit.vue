<template>
  <div class="panel with-nav-tabs panel-default">
    <div class="panel-heading">
      <ul class="nav nav-tabs">
        <li v-for="kit in kits" :class="{ active: kit.name == activeKit.name }">
          <a data-toggle="tab" href="" @click.prevent="setActiveKit(kit.name)">{{ kit.label }}</a>
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
            <div class="form-group col-xs-9">
              <template v-if="activeKit.version">
                <label for="version" class="control-label col-sm-2">
                  {{ activeKit.version.label }}
                </label>
                <div class="col-sm-3">
                  <select class="form-control" id="version">
                    <option v-for="release in activeKit.version.releases">{{ release }}</option>
                  </select>
                </div>
              </template>
            </div>

            <div class="checkbox col-xs-3 pull-right">
              <label>
                <input id="install" type="checkbox" :checked="activeKit.install.value == 'true'">
                <strong>{{ activeKit.install.label }}</strong>
              </label>
            </div>

            <template v-if="activeKit.extensions">
              <div class="clearfix"></div>

              <fieldset>
                <legend class="text-muted">Extensions</legend>
                <div class="form-group col-sm-6" v-for="extension in activeKit.extensions">
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
      kits() {
        return this.$store.getters.presets.kits;
      },
      activeKit() {
        const activeKit = this.$store.getters.flags.active.kit;
        return this.$store.getters.presets.kits[activeKit];
      },
    },

    methods: {
      setActiveKit(kit) {
        this.$store.dispatch('SET_ACTIVE_KIT', kit);
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
