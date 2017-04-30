<template>
  <div class="panel panel-default panel-container">
    <div class="panel-body">
      <h4 class="summary-item-header">
        <label>Development Kits</label>
        <router-link tag="a" class="pull-right" to="builder/settings/kits"
                     @click.native="setActive(name)">
          <i class="fa fa-pencil-square-o fa-fw"></i>
        </router-link>
      </h4>
      <table class="table summary-item-content" v-if="Object.keys(summary).length">
        <thead>
          <tr>
            <th class="col-md-3">Name</th>
            <th>Extensions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(extensions, kit) in summary">
            <td><label>{{ kit }}</label></td>
            <td v-if="extensions">
              {{ extensions }}
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
    data() {
      return {
        name: 'DevelopmentKit',
      };
    },
    mixins: [
      controls,
    ],
    computed: {
      ...mapGetters([
        'chosenKits',
        'presets',
      ]),
      summary() {
        const summary = {};
        const kits = this.chosenKits;
        const presets = this.presets.kits;

        Object.keys(kits).forEach((key) => {
          const kit = kits[key];
          const preset = presets[key];
          let version = 'Latest';

          if (preset.version) {
            const option = preset.version.options.find(option => option.value === kit.version);
            version = option.label ? option.label : option.value;
          }

          const label = `${preset.label} (${version})`;
          summary[label] = 'None';

          if (kit.extensions) {
            const convertResultToLabel = function call(result) {
              return `${result.label} (${kit.extensions[result.name]})`;
            };

            summary[label] = preset.extensions
                                   .filter(extension => extension.name in kit.extensions)
                                   .map(convertResultToLabel)
                                   .join(', ');
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
