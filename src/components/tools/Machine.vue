<template>
  <div class="list-group-item">
    <div class="list-group-item-heading">
      <h4 class="summary-item-header">
        Virtual Machine
        <a class="pull-right">
          <i class="fa fa-pencil-square-o fa-fw"></i><span class="summary-item-edit">Edit</span>
        </a>
      </h4>
    </div>
    <div class="list-group-item-text summary-item-content">
      <form class="form-horizontal">
        <p class="form-group" v-for="(value, label) in summary">
          <span class="col-md-3 form-static-control">
            {{ label }}:
          </span>
          <span class="form-static-control">
            {{ value }}
          </span>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      summary() {
        const presets = this.$store.getters.presets.machine;
        const values = this.$store.getters.values.machine;

        const summary = {
          [presets.box.label]: presets.box.releases[values.box],
          [presets.memory.label]: values.memory,
          [presets.timezone.label]: values.timezone,
        };

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
