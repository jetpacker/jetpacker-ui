<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">{{ presets.label }}</h3>
    </div>
    <div class="panel-body">
      <p class="text-muted">
        {{ presets.description }}
      </p>
        <div class="form-group col-md-6 clear-left">
          <label class="control-label" for="box">
            {{ presets.box.label }}
          </label>
          <div class="controls">
            <select class="form-control" id="box">
              <option v-for="(value, key) in presets.box.releases"
                      :value="key"
                      :selected="values.box == key">{{ value }}</option>
            </select>
          </div>
        </div>

        <div class="form-group col-md-6 clear-right">
          <label for="memory">
            {{ presets.memory.label }}
          </label>
          <input id="memory" type="number" class="form-control" placeholder="Memory"
                 :value="values.memory">
        </div>

        <div class="form-group col-md-6 clear-left">
          <label class="control-label" for="timezone">
            {{ presets.timezone.label }}
          </label>
          <div class="controls">
            <select class="form-control" id="timezone">
              <option v-for="id in presets.timezone.ids"
                      :value="id"
                      :selected="values.timezone == id">{{ id }}</option>
            </select>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      presets() {
        return this.$store.getters.presets.machine;
      },
      values() {
        return this.$store.getters.values.machine;
      },
    },
  };
</script>
