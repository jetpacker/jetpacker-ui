<template>
  <div class="main-wrapper">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Build Summary</h3>
      </div>
      <div class="panel-body">
        <app-summary></app-summary>
        <div class="row">
          <div class="col-sm-6">
            <button type="button" class="btn btn-default btn-lg btn-block"
                    @click="resetSettings">
              Reset Settings
            </button>
          </div>
          <div class="col-sm-6">
            <button type="button" class="btn btn-xl btn-lg btn-block"
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
  @import url("/static/styles/builder.css");
</style>
