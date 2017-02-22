<template>
  <div class="list-group-item">
    <div class="list-group-item-heading">
      <h4 class="summary-item-header">
        Development Kits
        <a class="pull-right">
          <i class="fa fa-pencil-square-o fa-fw"></i><span class="summary-item-edit">Edit</span>
        </a>
      </h4>
    </div>
    <div class="list-group-item-text summary-item-content">
      <table class="table table-bordered" v-if="Object.keys(summary).length">
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
  export default {
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
              const filterResults = function call(result) {
                return `${result.label} (${extensions[result.name].version})`;
              };

              summary[label] = preset.extensions
                                     .filter(extension => chosenExtensions.includes(extension.name))
                                     .map(filterResults)
                                     .join(', ');
            }
          }
        });

        return summary;
      },
    },
  };
</script>

<style>
  .summary-item-header {
    margin-top: 0px;
    padding-top: 0px;
  }
  .summary-item-content {
    padding-top: 10px;
  }
  .summary-item-edit {
    font-size: 15px;
    vertical-align: top;
  }
</style>
