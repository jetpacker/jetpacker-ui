<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="col-md-12 jumbotron">
        <h2 class="caption">
          Jetpack Builder
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
        <button type="button" class="btn btn-danger btn-lg btn-block"
                @click="resetSettings">
          <i class="fa fa-undo fa-lg"></i>
          Reset Settings
        </button>
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-success btn-lg btn-block"
                @click="buildJetpack">
          <i class="fa fa-cloud-download fa-lg"></i>
          Build Jetpack
        </button>
      </div>

      <div class="col-md-12 panel-divider"></div>

      <app-summary></app-summary>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Summary from './Summary';

  export default {
    components: {
      appSummary: Summary,
    },
    methods: {
      ...mapActions([
        'resetSettings',
        'buildJetpack',
      ]),
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
