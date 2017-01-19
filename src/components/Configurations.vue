<template>
  <div id="configurations" class="col-md-3">
    <div class="panel-group" id="accordion">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            Virtual Machines
          </h4>
        </div>
        <div id="virtualMachines" class="panel-collapse collapse in">
          <div class="panel-body">
            <p>Ubuntu</p>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            Development Kits
          </h4>
        </div>
        <div id="developmentKits" class="panel-collapse collapse">
          <div class="panel-body">
            <p>OpenJDK</p>
            <p>Node.js</p>
            <p>Guard</p>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            Database Servers
          </h4>
        </div>
        <div id="databaseServers" class="panel-collapse collapse">
          <div class="panel-body">
            <p>PostgreSQL</p>
            <p>MySQL</p>
            <p>MariaDB</p>

          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            Message Brokers
          </h4>
        </div>
        <div id="messageBrokers" class="panel-collapse collapse">
          <div class="panel-body">
            <p>RabbitMQ</p>
            <p>Eclipse Mosquitto</p>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            Search Engines
          </h4>
        </div>
        <div id="searchEngines" class="panel-collapse collapse">
          <div class="panel-body">
            <p>Elasticsearch</p>
            <p>Solr</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #configurations {
    padding-right: 0px;
  }
</style>
