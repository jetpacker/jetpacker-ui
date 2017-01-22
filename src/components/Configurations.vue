<template>
  <div id="configurations" class="col-md-3">
    <ul class="nav nav-pills nav-stacked nav-container">
      <li>
        <a class="nav-header"
           @click="showPanel('virtualMachines')">
          Virtual Machines
          <span class="glyphicon pull-right"
                :class="{
                  'glyphicon-menu-right': !panels['virtualMachines'],
                  'glyphicon-menu-down': panels['virtualMachines'],
                }"
                aria-hidden="true"></span>
        </a>
        <ul id="virtualMachines"
            class="nav nav-stacked collapse"
            :class="{ in: panels['virtualMachines'] }">
          <router-link to="/configuration/machine/ubuntu" tag="li" class="nav-item">
            <a>Ubuntu</a>
          </router-link>
        </ul>
      </li>
      <li>
        <a class="nav-header"
           @click="showPanel('developmentKits')">
          Development Kits
          <span class="glyphicon pull-right"
                :class="{
                  'glyphicon-menu-right': !panels['developmentKits'],
                  'glyphicon-menu-down': panels['developmentKits'],
                }"
                aria-hidden="true"></span>
        </a>
        <ul id="developmentKits"
            class="nav nav-stacked collapse"
            :class="{ in: panels['developmentKits'] }">
          <router-link to="/configuration/kit/openjdk" tag="li" class="nav-item">
            <a>OpenJDK</a>
          </router-link>
        </ul>
      </li>
      <li>
        <a class="nav-header"
           @click="showPanel('databaseServers')">
          Database Servers
          <span class="glyphicon pull-right"
                :class="{
                  'glyphicon-menu-right': !panels['databaseServers'],
                  'glyphicon-menu-down': panels['databaseServers'],
                }"
                aria-hidden="true"></span>
        </a>
        <ul id="databaseServers"
            class="nav nav-stacked collapse"
            :class="{ in: panels['databaseServers'] }">
          <router-link to="/configuration/container/postgresql" tag="li" class="nav-item">
            <a>PostgreSQL</a>
          </router-link>
        </ul>
      </li>
      <li>
        <a class="nav-header"
           @click="showPanel('messageBrokers')">
          Message Brokers
          <span class="glyphicon pull-right"
                :class="{
                  'glyphicon-menu-right': !panels['messageBrokers'],
                  'glyphicon-menu-down': panels['messageBrokers'],
                }"
                aria-hidden="true"></span>
        </a>
        <ul id="messageBrokers"
            class="nav nav-stacked collapse"
            :class="{ in: panels['messageBrokers'] }">
          <router-link to="/configuration/container/rabbitmq" tag="li" class="nav-item">
            <a>RabbitMQ</a>
          </router-link>
        </ul>
      </li>
      <li>
        <a class="nav-header"
           @click="showPanel('searchEngines')">
          Search Engines
          <span class="glyphicon pull-right"
                :class="{
                  'glyphicon-menu-right': !panels['searchEngines'],
                  'glyphicon-menu-down': panels['searchEngines'],
                }"
                aria-hidden="true"></span>
        </a>
        <ul id="searchEngines"
            class="nav nav-stacked collapse"
            :class="{ in: panels['searchEngines'] }">
          <router-link to="/configuration/container/elasticsearch" tag="li" class="nav-item">
            <a>Elasticsearch</a>
          </router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        panels: {
          virtualMachines: false,
          developmentKits: false,
          databaseServers: false,
          messageBrokers: false,
          searchEngines: false,
        },
      };
    },
    methods: {
      showPanel(panel) {
        Object.keys(this.panels).forEach((key) => {
          if (key === panel) {
            this.panels[key] = !this.panels[key];
          } else {
            this.panels[key] = false;
          }
        });
      },
    },
  };
</script>

<style scoped>
  a:link, a:visited {
    color: #333;
  }

  a:hover, a:active {
    color: #333;
  }

  .nav-container {
    background-color: #f5f5f5;
    border: #ddd solid 1px;
    border-radius: 3px;
  }

  .nav-header {
    color: #333;
    font-weight: bold;
    background-color: #f5f5f5;
  }

  .nav-header:hover, .nav-header:focus {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  .nav-item {
    color: #333;
    background-color: #fff;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  #configurations {
    padding-right: 0px;
  }
</style>
