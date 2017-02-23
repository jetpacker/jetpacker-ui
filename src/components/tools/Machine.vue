<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h4 class="summary-item-header">
        Virtual Machine
        <router-link tag="a" class="pull-right" to="/settings/machine"
                     @click.native="setActiveMenu(name)">
          <i class="fa fa-pencil-square-o fa-fw"></i><span class="summary-item-edit">Edit</span>
        </router-link>
      </h4>

      <div class="form-horizontal summary-item-content">
        <p class="form-group" v-for="(value, label) in summary">
          <span class="col-md-3 form-static-control">
            {{ label }}:
          </span>
          <span class="form-static-control">
            {{ value }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import controls from '../../mixins/controls';

  export default {
    data() {
      return {
        name: 'VirtualMachine',
      };
    },
    mixins: [
      controls,
    ],
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

<style scoped>
  .summary-item-header {
    padding-bottom: 0px;
  }
</style>
