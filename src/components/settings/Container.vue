<template>
  <div class="main-wrapper">
    <div class="panel with-nav-tabs panel-primary">
      <div class="panel-heading">
        <ul class="nav nav-tabs">
          <li v-for="container in containers"
              :class="{ active: container.name == activeContainer.name }">
            <a data-toggle="tab" href=""
               @click.prevent="setActive(container.name)">{{ container.label }}</a>
          </li>
        </ul>
        <!--
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="" @click.prevent="">MySQL</a></li>
          <li><a data-toggle="tab" href="" @click.prevent="">MariaDB</a></li>
          <li><a data-toggle="tab" href="" @click.prevent="">PostgreSQL</a></li>
          <li><a data-toggle="tab" href="" @click.prevent="">MongoDB</a></li>
          <li><a data-toggle="tab" href="" @click.prevent="">Redis</a></li>
          <li class="dropdown active"
              :class="{ open: openOthers }">
            <a href="" class="dropdown-toggle"
               data-toggle="dropdown"
               @click.prevent="toggleOthers()">Others <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li class="active"><a href="" data-toggle="tab" @click.prevent="">Cassandra</a></li>
              <li><a href="" data-toggle="tab" @click.prevent="">InFluxDB</a></li>
            </ul>
          </li>
        </ul>
        -->
      </div>

      <div class="panel-body">
        <div class="tab-content">
          <div id="home" class="tab-pane fade in active">
            <p class="text-muted">
              {{ activeContainer.description }}
            </p>

            <div class="form-horizontal">
              <div class="form-group col-md-9 clear-left">
                <h4>
                  <label for="version" class="control-label col-md-2">
                    {{ activeContainer.version.label }}
                  </label>
                </h4>
                <div class="col-md-4">
                  <select class="form-control" id="version"
                          name="version"
                          :disabled="!install"
                          @input="update">
                    <option v-for="option in activeContainer.version.options"
                            :value="option.value"
                            :selected="version == option.value">
                      {{ option.label ? option.label : option.value }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-3 checkbox pull-right clear-right">
                <h4>
                  <label>
                    <input id="install" type="checkbox"
                           name="install"
                           :value="true"
                           :checked="install"
                           @change="update">
                    <strong>{{ activeContainer.install.label }}</strong>
                  </label>
                </h4>
              </div>

              <div class="clearfix"></div>

              <template v-if="activeContainer.parameters">
                <fieldset>
                  <legend class="text-muted">
                    <i class="fa fa-keyboard-o fa-lg"></i>
                    Parameters
                  </legend>
                  <div class="form-group">
                    <div class="col-md-6 parameters" v-for="parameter in activeContainer.parameters">
                      <h4>
                        <label for="rootPassword">{{ parameter.label }}</label>
                      </h4>
                      <input id="rootPassword" class="form-control"
                             :placeholder="parameter.label"
                             :name="parameter.name"
                             :value="parameters[parameter.name]"
                             :disabled="!install"
                             @input="updateParameter">
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
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        openOthers: false,
      };
    },
    computed: {
      ...mapGetters([
        'presets',
        'values',
        'tabs',
      ]),
      containers() {
        const containers = this.presets.containers;
        return Object.values(containers)
                     .filter(container => container.type === this.$route.params.type);
      },
      activeContainer() {
        const container = this.tabs.container[this.$route.params.type];
        return this.presets.containers[container];
      },
      version() {
        const container = this.tabs.container[this.$route.params.type];
        return this.values.containers[container].version;
      },
      install() {
        const container = this.tabs.container[this.$route.params.type];
        return this.values.containers[container].install;
      },
      parameters() {
        const container = this.tabs.container[this.$route.params.type];
        return this.values.containers[container].parameters;
      },
    },
    methods: {
      ...mapActions([
        'setActiveContainer',
        'updateContainer',
        'updateContainerParameter',
      ]),
      toggleOthers() {
        console.log('openOthers', this.openOthers);
        this.openOthers = !this.openOthers;
      },
      setActive(container) {
        const payload = {
          container,
          type: this.$route.params.type,
        };

        this.setActiveContainer(payload);
      },
      update(input) {
        const payload = {
          name: this.activeContainer.name,
          attribute: input.target.name,
        };

        if (payload.attribute === 'install') {
          payload.value = input.target.checked;
        } else {
          payload.value = input.target.value;
        }

        this.updateContainer(payload);
      },
      updateParameter(input) {
        // TODO: Add binding logic
        const payload = {
          name: this.activeContainer.name,
          parameter: {
            name: input.target.name,
            value: input.target.value,
          },
        };

        this.updateContainerParameter(payload);
      },
    },
  };
</script>

<style scoped>
  @import url("/static/styles/tabbedPanel.css");
  @import url("/static/styles/setting.css");
</style>
