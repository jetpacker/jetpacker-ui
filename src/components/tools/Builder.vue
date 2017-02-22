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
          <app-machine></app-machine>
          <app-kit></app-kit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Machine from './Machine';
  import Kit from './Kit';

  export default {
    components: {
      appMachine: Machine,
      appKit: Kit,
    },
    computed: {
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
</style>
