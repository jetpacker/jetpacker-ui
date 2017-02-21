<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="col-md-12 jumbotron">
        <h2 class="buildCaption">You are almost there!</h2>
        <p>
          Click
          <span class="label label-success">
            <i class="fa fa-cloud-download fa-lg"></i>
            Build Jetpack</span>
          to download your Jetpack or
          <span class="label label-danger">
            <i class="fa fa-undo fa-lg"></i>
            Reset Settings</span>
          to revert to default settings.
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
    </div>
  </div>
</template>

<style scoped>
  .jumbotron {
    background-color: inherit;
    padding: 0 0 0 0;
    margin-bottom: 5px;
  }
  .buildCaption {
    margin-top: 0px;
  }
</style>
