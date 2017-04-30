<template>
  <div class="panel panel-default panel-container">
    <div class="panel-body">
      <h4 class="summary-item-header">
        <label>Virtual Machine</label>
        <router-link tag="a" class="pull-right" to="builder/settings/machine"
                     @click.native="setActive(name)">
          <i class="fa fa-pencil-square-o fa-fw"></i>
        </router-link>
        <br/>
        <br/>
      </h4>

      <div class="form-horizontal summary-item-content">
        <p class="form-group" v-for="(value, label) in summary">
          <label class="col-md-3 form-static-control static-label">
            {{ label }}:
          </label>
          <span class="form-static-control form-value">
            {{ value }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
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
      ...mapGetters([
        'presets',
        'values',
      ]),
      summary() {
        const presets = this.presets.machine;
        const values = this.values.machine;

        const option = presets.box.options.find(option => option.value === values.box);

        const summary = {
          [presets.box.label]: option.label,
          [presets.memory.label]: values.memory,
          [presets.timezone.label]: values.timezone,
        };

        return summary;
      },
    },
  };
</script>

<style scoped>
  @import url("/static/styles/summaryItem.css");

  .summary-item-header {
    padding-bottom: 0px;
  }
</style>
