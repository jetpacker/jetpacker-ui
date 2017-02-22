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
        <p class="form-group">
          <span class="col-md-3 form-static-control">
            {{ virtualMachine.box.label }}:
          </span>
          <span class="form-static-control">
            {{ virtualMachine.box.value }}
          </span>
        </p>
        <p class="form-group">
          <span class="col-md-3 form-static-control">
            {{ virtualMachine.memory.label }}:
          </span>
          <span class="form-static-control">
            {{ virtualMachine.memory.value }}
          </span>
        </p>
        <p class="form-group">
          <span class="col-md-3 form-static-control">
            {{ virtualMachine.timezone.label }}:
          </span>
          <span class="form-static-control">
            {{ virtualMachine.timezone.value }}
          </span>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      virtualMachine() {
        const presets = this.$store.getters.presets.machine;
        const values = this.$store.getters.values.machine;

        const virtualMachine = {
          box: {
            label: presets.box.label,
            value: presets.box.releases[values.box],
          },
          memory: {
            label: presets.memory.label,
            value: values.memory,
          },
          timezone: {
            label: presets.timezone.label,
            value: values.timezone,
          },
        };

        return virtualMachine;
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
