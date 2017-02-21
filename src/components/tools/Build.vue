<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">
        Jetpack Preview
        <div id="buttonBuildGroup" class="btn-group pull-right" role="group">
          <button type="button" class="btn btn-default">
            <i class="fa fa-undo fa-lg"></i>
            Reset Settings
          </button>
          <button type="button" class="btn btn-default">
            Build Jetpack
            <i class="fa fa-rocket fa-lg"></i>
          </button>
        </div>
      </h3>
    </div>
    <div class="panel-body">
      <div class="panel panel-default">
        <div class="panel-heading accordion-header">
          <h1 class="panel-title">
            <a>
              <i class="fa fa-desktop fa-lg"></i>
              Virtual Machine
            </a>
          </h1>
        </div>
        <div class="panel-collapse collapse">
          ...
        </div>
        <div class="panel-heading accordion-header">
          <h1 class="panel-title">
            <a>
              <i class="fa fa-gears fa-lg"></i>
              Development Kits
            </a>
          </h1>
        </div>
        <div class="panel-collapse collapse">
          ...
        </div>
      </div>


      </div>
    </div>
  </div>
</template>

<style scoped>
  .accordion-header {
    background-color: #ffffff;
  }
  #buttonBuildGroup {
    margin-top: -8px;
  }
</style>
