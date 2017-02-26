<template>
  <div class="main-wrapper">
    <div class="panel panel-default">
      <div class="panel-heading">
        <i class="fa fa-linux fa-lg"></i>
        {{ machine.label }}
      </div>
      <div class="panel-body">
        <p class="text-muted">
          {{ machine.description }}
        </p>
          <div class="form-group col-md-6 clear-left">
            <label class="control-label" for="box">
              {{ machine.box.label }}
            </label>
            <div class="controls">
              <select class="form-control" id="box"
                      :name="machine.box.name"
                      @input="update">
                <option v-for="(value, key) in machine.box.options"
                        :value="key"
                        :selected="properties.box == key">
                  {{ value }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group col-md-6 clear-right">
            <label for="memory">
              {{ machine.memory.label }}
            </label>
            <input id="memory" type="number" class="form-control" placeholder="Memory"
                   :name="machine.memory.name"
                   :value="properties.memory"
                   @input="update">
          </div>

          <div class="form-group col-md-6 clear-left">
            <label class="control-label" for="timezone">
              {{ machine.timezone.label }}
            </label>
            <div class="controls">
              <select class="form-control" id="timezone"
                      :name="machine.timezone.name"
                      @input="update">
                <option v-for="(value, key) in machine.timezone.options"
                        :value="key"
                        :selected="properties.timezone == key">
                  {{ value }}
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
