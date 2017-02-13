<template>
  <div class="panel with-nav-tabs panel-default">
    <div class="panel-heading">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="" @click.prevent="">MySQL</a></li>
        <li><a data-toggle="tab" href="" @click.prevent="">PostgreSQL</a></li>
        <li><a data-toggle="tab" href="" @click.prevent="">MongoDB</a></li>
      </ul>
    </div>

    <div class="panel-body">
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          <p class="text-muted">
            MySQL is the most popular Open Source SQL database management system.
          </p>
          <div class="form-horizontal">
            <div class="form-group col-xs-9 required">
              <label for="version" class="control-label col-sm-2">Version</label>
              <div class="col-sm-3">
                <select class="form-control" id="version">
                  <option>2.0.0</option>
                  <option>1.9.0</option>
                </select>
              </div>
            </div>

            <div class="col-xs-3 checkbox pull-right">
              <label>
                <input id="install" type="checkbox"> <strong>Install</strong>
              </label>
            </div>

            <div class="clearfix"></div>
          </div>

          <div>
            <fieldset>
              <legend class="text-muted">Properties</legend>
              <div class="form-group col-xs-6">
                <label for="rootPassword">Root Password</label>
                <input id="rootPassword" type="password" class="form-control" placeholder="Root Password">
              </div>
              <div class="form-group col-xs-6">
                <label for="database">Database</label>
                <input id="database" type="text" class="form-control" placeholder="Database">
              </div>
              <div class="form-group col-xs-6">
                <label for="port">Port</label>
                <input id="port" type="number" class="form-control" placeholder="Port">
              </div>
            </fieldset>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .panel.with-nav-tabs .panel-heading{
    padding: 5px 5px 0 5px;
  }
  .panel.with-nav-tabs .nav-tabs{
    border-bottom: none;
  }
  .panel.with-nav-tabs .nav-justified{
    margin-bottom: -1px;
  }
</style>
