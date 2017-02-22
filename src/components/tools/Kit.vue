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
      <form class="form-horizontal">
        {{ summary }}
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      summary() {
        const presets = this.$store.getters.presets.kits;
        const values = this.$store.getters.values.kits;
        const installs = Object.keys(this.$store.getters.values.kits)
                               .filter(key => values[key].install === true);

        const summary = {};

        installs.forEach((install)   => {
          const value = values[install];
          const preset = presets[install];
          const extensions = values[install].extensions;

          summary[preset.label] = {
            version: value.version,
            extensions,
          };

          console.log(install, 'installed');
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
