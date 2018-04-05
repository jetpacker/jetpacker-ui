<template>
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
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'resetSettings',
        'buildJetpack',
      ]),
    },
  };
</script>
