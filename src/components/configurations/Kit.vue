<template>
  <div class="panel with-nav-tabs panel-default">
    <div class="panel-heading">
      <ul class="nav nav-tabs">
        <li v-for="content in contents" :class="{ active: content.name == activeContent.name }">
          <a data-toggle="tab" href="" @click.prevent="setActiveContent(content.name)">{{ content.label }}</a>
        </li>
      </ul>
    </div>

    <div class="panel-body">
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <p class="text-muted">
            {{ activeContent.description }}
          </p>
          <div class="form-horizontal">
            <div class="form-group col-xs-9">
              <template v-if="activeContent.version">
                <label for="version" class="control-label col-sm-2">Version</label>
                <div class="col-sm-3">
                  <select class="form-control" id="version">
                    <option v-for="release in activeContent.version.releases">{{ release }}</option>
                  </select>
                </div>
              </template>
            </div>

            <div class="checkbox col-xs-3 pull-right">
              <label>
                <input id="install" type="checkbox" :checked="activeContent.install.value == 'true'">
                <strong>{{ activeContent.install.label }}</strong>
              </label>
            </div>

            <template v-if="activeContent.extensions">
              <div class="clearfix"></div>

              <fieldset>
                <legend class="text-muted">Extensions</legend>
                <div class="form-group col-sm-6" v-for="extension in activeContent.extensions">
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
      contents() {
        return this.$store.getters.panels.kits.contents;
      },
      activeContent() {
        const activeContent = this.$store.getters.panels.kits.activeContent;
        return this.$store.getters.panels.kits.contents[activeContent];
      },
    },

    methods: {
      setActiveContent(activeContent) {
        this.$store.dispatch('SET_ACTIVE_CONTENT', activeContent);
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
