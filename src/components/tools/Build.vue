<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="col-md-12 jumbotron">
        <h2 class="caption">
          You are almost there!
        </h2>
        <p>
            Click
            <span class="label label-success">
                <i class="fa fa-cloud-download fa-lg"></i>
                Build Jetpack</span>
            to download your Jetpack or
            <span class="label label-danger">
                <i class="fa fa-undo fa-lg"></i>
                Reset Settings</span>
            to revert to factory settings.
        </p>
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-danger btn-lg btn-block">
          <i class="fa fa-undo fa-lg"></i>
          Reset Settings
        </button>
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-success btn-lg btn-block">
          <i class="fa fa-cloud-download fa-lg"></i>
          Build Jetpack
        </button>
      </div>
      <div class="col-md-12 summary">
        <h4 class="summary-caption">
          <a>
            <i class="fa fa-chevron-circle-down fa-lg"></i>
            Hide Your Build Summary
          </a>
        </h4>

        <div class="list-group">
          <div class="list-group-item">
            <h4 class="list-group-item-heading">
              Virtual Machine
            </h4>
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
          <div class="list-group-item">
            <h4 class="list-group-item-heading">
              Development Kits
            </h4>
            <div class="list-group-item-text summary-item-content">
              aaaaaa
            </div>
          </div>
          <div class="list-group-item">
            <h4 class="list-group-item-heading">
              Data Stores
            </h4>
            <div class="list-group-item-text">
              aaaaaa
            </div>
          </div>

          <div class="list-group-item">
            <h4 class="list-group-item-heading">
              Message Brokers
            </h4>
            <p class="list-group-item-text">
              aaaaaa
            </p>
          </div>

          <div class="list-group-item">
            <h4 class="list-group-item-heading">
              Search Engines
            </h4>
            <p class="list-group-item-text">
              aaaaaa
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      values() {
        return this.$store.getters.values;
      },
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
//      developmentKits() {
//        const presets = this.$store.getters.presets.kits;
//
//      },
//      dataStores() {
//        const containers = this.$store.getters.presets.containers;
//        const presets = Object.values(containers)
//          .filter(container => container.type === 'DataStore');
//      },
//      messageBrokers() {
//        const containers = this.$store.getters.presets.containers;
//        const presets = Object.values(containers)
//          .filter(container => container.type === 'MessageBroker');
//      },
//      searchEngines() {
//        const containers = this.$store.getters.presets.containers;
//        const presets Object.values(containers)
//          .filter(container => container.type === 'SearchEngine');
//      },
    },
  };
</script>

<style scoped>
  .jumbotron {
    background-color: inherit;
    padding: 0 0 0 0;
    margin-bottom: 5px;
  }
  .caption {
    margin-top: 0px;
  }
  .summary {
    padding: 20px 0 5px 0;
  }
  .summary-caption {
    padding-bottom: 20px;
  }
  .summary-item-content {
    padding-top: 10px;
  }
</style>
