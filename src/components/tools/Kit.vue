<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h4 class="summary-item-header">
        Development Kits
        <router-link tag="a" class="pull-right" to="/settings/kits"
                     @click.native="setActive(name)">
          <i class="fa fa-pencil-square-o fa-fw"></i><span class="summary-item-edit">Edit</span>
        </router-link>
      </h4>
      <table class="table table-bordered summary-item-content" v-if="Object.keys(summary).length">
        <thead>
          <tr>
            <th class="col-md-3">Name</th>
            <th>Extensions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(extensions, kit) in summary">
            <td>{{ kit }}</td>
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

          const label = `${preset.label} (${kit.version ? kit.version : 'Latest'})`;
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
