<template>
  <div class="main-wrapper">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Build Summary</h3>
      </div>
      <div class="panel-body">
        <app-summary></app-summary>
        <!-- <div class="col-md-12 jumbotron">
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
        </div>         -->
        <div class="row">
          <div class="col-sm-6">
            <button type="button" class="btn btn-default btn-lg btn-block"
                    @click="resetSettings">
              Reset Settings
            </button>
          </div>
          <div class="col-sm-6">
            <button type="button" class="btn btn-primary btn-lg btn-block"
                    @click="buildJetpack">
              <i class="fa fa-cloud-download fa-lg"></i>
              Build Jetpack
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Summary from './Summary';

  export default {
    components: {
      appSummary: Summary,
    },
    methods: {
      buildJetpack() {
        this.$store.dispatch('BUILD_JETPACK');
      },
      resetSettings() {
        this.$store.dispatch('RESET_SETTINGS');
      },
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
</style>
