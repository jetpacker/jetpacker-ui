<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h4 class="summary-item-header">
        Development Kits
        <router-link tag="a" class="pull-right" to="/settings/kits"
                     @click.native="setActiveMenu(key)">
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
            <td>
              {{ extensions }}
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
  import controls from '../../mixins/controls';

  export default {
    mixins: [
      controls,
    ],
    computed: {
      summary() {
        const summary = {};
        const presets = this.$store.getters.presets.kits;
        const values = this.$store.getters.values.kits;

        const chosenKits = Object.keys(values)
                                 .filter(key => values[key].install === true);

        chosenKits.forEach((chosenKit) => {
          const value = values[chosenKit];
          const preset = presets[chosenKit];

          const label = `${preset.label} (${value.version ? value.version : 'Latest'})`;
          summary[label] = 'None';

          if (preset.extensions) {
            const extensions = value.extensions;
            const chosenExtensions = Object.keys(extensions)
                                           .filter(key => extensions[key].install === true);

            if (chosenExtensions.length > 0) {
              const convertResultToLabel = function call(result) {
                return `${result.label} (${extensions[result.name].version})`;
              };

              summary[label] = preset.extensions
                                     .filter(extension => chosenExtensions.includes(extension.name))
                                     .map(convertResultToLabel)
                                     .join(', ');
            }
          }
        });

        return summary;
      },
    },
  };
</script>
