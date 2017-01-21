<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">OpenJDK</h3>
    </div>
    <div class="panel-body">
      <p class="text-muted">
        OpenJDK (Open Java Development Kit) is a free and open source implementation of the Java Platform, Standard Edition.
      </p>
      <div class="form-horizontal">
        <div class="form-group col-xs-9">
          <label for="version" class="control-label col-sm-2">Version</label>
          <div class="col-sm-3">
            <select class="form-control" id="version">
              <option>8</option>
              <option>7</option>
            </select>
          </div>
        </div>

        <div class="checkbox col-xs-3 pull-right">
          <label>
            <input id="install" type="checkbox"> <strong>Install</strong>
          </label>
        </div>

        <div class="clearfix"></div>

        <fieldset>
          <legend class="text-muted">Extensions</legend>
            <div class="form-group col-sm-6">
              <div class="checkbox col-sm-6">
                <label>
                  <input id="grails" type="checkbox"> <strong>Grails</strong>
                </label>
              </div>
              <div class="col-sm-6">
                <select class="form-control">
                  <option>3.1.1</option>
                  <option>2.5.0</option>
                </select>
              </div>
            </div>

            <div class="form-group col-sm-6 pull-right">
              <div class="checkbox col-sm-6">
                <label>
                  <input id="springboot" type="checkbox"> <strong>Spring Boot</strong>
                </label>
              </div>
              <div class="col-sm-6">
                <select class="form-control">
                  <option>2.0.1</option>
                  <option>1.5.4</option>
                </select>
              </div>
            </div>

            <div class="form-group col-sm-6">
              <div class="checkbox col-sm-6">
                <label>
                  <input id="activator" type="checkbox"> <strong>Activator</strong>
                </label>
              </div>
              <div class="col-sm-6">
                <select class="form-control">
                  <option>2.0.1</option>
                  <option>1.5.4</option>
                </select>
              </div>
            </div>

            <div class="form-group col-sm-6 pull-right">
              <div class="checkbox col-sm-6">
                <label>
                  <input id="groovy" type="checkbox"> <strong>Groovy</strong>
                </label>
              </div>
              <div class="col-sm-6">
                <select class="form-control">
                  <option>2.0.1</option>
                  <option>1.5.4</option>
                </select>
              </div>
            </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>
