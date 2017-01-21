<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Ubuntu</h3>
    </div>
    <div class="panel-body">
      <p class="text-muted">
        Ubuntu is an open source software platform that runs from the cloud, to the smartphone, to all your things.
      </p>
      <div>
        <div class="form-group col-xs-6">
          <label class="control-label" for="box">Box</label>
          <div class="controls">
            <select class="form-control" id="box">
              <option>ubuntu/trusty64</option>
              <option>ubuntu/trusty32</option>
            </select>
          </div>
        </div>
        <div class="form-group col-xs-6">
          <label class="control-label" for="timezone">Timezone</label>
          <div class="controls">
            <select class="form-control" id="timezone">
              <option>Asia/Singapore</option>
              <option>Asia/Thailand</option>
            </select>
          </div>
        </div>
        <div class="form-group col-xs-6">
          <label for="memory">Memory</label>
          <input id="memory" type="number" class="form-control" placeholder="Memory">
        </div>
      </div>
    </div>
  </div>
</template>
