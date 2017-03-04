<template>
  <div class="panel panel-default panel-container">
    <div class="panel-body">
      <h4 class="summary-item-header">
        <label>{{ description }}</label>
        <router-link tag="a" class="pull-right"
                     :to="'/settings/containers/' + name"
                     @click.native="setActive(name)">
          <i class="fa fa-pencil-square-o fa-fw"></i>
        </router-link>
      </h4>
      <table class="table summary-item-content" v-if="Object.keys(summary).length">
        <thead>
          <tr>
            <th class="col-md-3">Name</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(parameters, container) in summary">
            <td><label>{{ container }}</label></td>
            <td v-if="Object.keys(parameters).length">
              {{ parameters }}
            </td>
            <td v-else>
              None
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>
        None
      </p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import controls from '../../mixins/controls';

  export default {
    mixins: [
      controls,
    ],
    props: {
      name: String,
      description: String,
    },
    computed: {
      ...mapGetters([
        'chosenContainers',
        'presets',
      ]),
      summary() {
        const summary = {};
        const containers = this.chosenContainers;
        const presets = Object.values(this.presets.containers)
                              .filter(container => container.type === this.name
                                      && container.name in containers);

        presets.forEach((preset) => {
          const label = `${preset.label} (${containers[preset.name].version})`;
          const parameters = containers[preset.name].parameters;

          summary[label] = {};

          if (parameters) {
            preset.parameters.forEach((parameter) => {
              summary[label][parameter.label] = parameters[parameter.name];
            });
          }
        });

        return summary;
      },
    },
  };
</script>

<style scoped>
  @import url("/static/styles/summaryItem.css");
</style>
