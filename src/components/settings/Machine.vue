<template>
  <div class="main-wrapper">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <i class="fa fa-linux fa-lg"></i>
        {{ machine.label }}
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
                <option v-for="option in machine.box.options"
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
              <label class="control-label" for="timezone">
                {{ machine.timezone.label }}
              </label>
            </h4>
            <div class="controls">
              <select class="form-control" id="timezone"
                      :name="machine.timezone.name"
                      @input="update">
                <option v-for="option in machine.timezone.options"
                        :value="option.value"
                        :selected="properties.timezone == option.value">
                  {{ option.label ? option.label : option.value }}
                </option>
              </select>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
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
  };
</script>

<style scoped>
  @import url("/static/styles/setting.css");
</style>
