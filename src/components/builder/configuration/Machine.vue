<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">
        <i class="fa fa-linux fa-lg"></i>
        {{ machine.label }}
      </h3>
    </div>
    <div class="panel-body">
      <p class="text-muted">
        {{ machine.description }}
      </p>
        <div class="form-group col-md-6 clear-left">
          <h4>
            <label class="control-label" for="box">
              {{ machine.box.label }}
            </label>
          </h4>
          <div class="controls">
            <select class="form-control" id="box"
                    :name="machine.box.name"
                    @input="update">
              <option v-for="(option, index) in machine.box.options"
                      :key="index"
                      :value="option.value"
                      :selected="properties.box == option.value">
                {{ option.label ? option.label : option.value }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-group col-md-6 clear-right">
          <h4>
            <label for="memory">
              {{ machine.memory.label }}
            </label>
          </h4>
          <input id="memory" type="number" class="form-control" placeholder="Memory"
                 :name="machine.memory.name"
                 :value="properties.memory"
                 @input="update">
        </div>

        <div class="form-group col-md-6 clear-left">
          <h4>
            <label class="control-label" for="box">
              {{ machine.synchronization.label }}
            </label>
          </h4>
          <div class="controls">
            <select class="form-control" id="synchronization"
                    :name="machine.synchronization.name"
                    @input="update">
              <option v-for="(option, index) in machine.synchronization.options"
                      :key="index"
                      :value="option.value"
                      :selected="properties.synchronization == option.value">
                {{ option.label ? option.label : option.value }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-group col-md-6 clear-right">
          <h4>
            <label class="control-label" for="timezone">
              {{ machine.timezone.label }}
            </label>
          </h4>
          <div class="controls">
            <select class="form-control" id="timezone"
                    :name="machine.timezone.name"
                    @input="update">
              <option v-for="(option, index) in machine.timezone.options"
                      :key="index"
                      :value="option.value"
                      :selected="properties.timezone == option.value">
                {{ option.label ? option.label : option.value }}
              </option>
            </select>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import controls from '../../../mixins/controls';

export default {
  mixins: [
    controls,
  ],
  methods: {
    ...mapActions([
      'updateMachine',
    ]),
    update(input) {
      const payload = {
        attribute: input.target.name,
        value: input.target.value,
      };

      this.updateMachine(payload);
    },
  },
  computed: {
    ...mapGetters([
      'presets',
      'values',
    ]),
    machine() {
      return this.presets.machine;
    },
    properties() {
      return this.values.machine;
    },
  },
  created() {
    this.setActive('VirtualMachine');
  },
};
</script>

<style scoped>
  @import url("/static/styles/setting.css");
</style>
