<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="col-md-12 jumbotron">
        <h2 class="build-caption">
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
      <div class="col-md-12 build-summary">
        <h4>
          <a>
            <i class="fa fa-chevron-circle-down fa-lg"></i>
            Show Build Summary
          </a>
        </h4>

        <div class="panel panel-default">
          <div class="panel-body">
            <h4>Virtual Machine</h4>
            <p>...</p>
            <h4>Development Kits</h4>
            <p>...</p>
            <h4>Data Stores</h4>
            <p>...</p>
            <h4>Message Brokers</h4>
            <p>...</p>
            <h4>Search Engines</h4>
            <p>...</p>
          </div>
        </div>
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
  .build-caption {
    margin-top: 0px;
  }
  .build-summary {
    padding: 15px 0 5px 0;
  }
</style>
