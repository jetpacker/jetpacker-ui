<template>
  <div id="configurations" class="col-md-3">
    <ul class="nav nav-pills nav-stacked nav-container2">
      <router-link to="/configuration/machine" tag="li"
                   @click.native="show('virtualMachine')"
                   :class="{ 'active': configurations['virtualMachine'] }">
        <a>Virtual Machine</a>
      </router-link>
      <router-link to="/configuration/kits" tag="li"
                   @click.native="show('developmentKits')"
                   :class="{ 'active': configurations['developmentKits'] }">
        <a>Development Kits</a>
      </router-link>
      <router-link to="/configuration/containers/databaseServers" tag="li"
                   @click.native="show('databaseServers')"
                   :class="{ 'active': configurations['databaseServers'] }">
        <a>Database Servers</a>
      </router-link>
      <router-link to="/configuration/containers/messageBrokers" tag="li"
                   @click.native="show('messageBrokers')"
                   :class="{ 'active': configurations['messageBrokers'] }">
        <a>Message Brokers</a>
      </router-link>
      <router-link to="/configuration/containers/searchEngines" tag="li"
                   @click.native="show('searchEngines')"
                   :class="{ 'active': configurations['searchEngines'] }">
        <a>Search Engines</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        configurations: {
          virtualMachine: false,
          developmentKits: false,
          databaseServers: false,
          messageBrokers: false,
          searchEngines: false,
        },

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
      show(configuration) {
        console.log('hello');
        Object.keys(this.configurations).forEach((key) => {
          if (key === configuration) {
            this.configurations[key] = !this.configurations[key];
          } else {
            this.configurations[key] = false;
          }
        });
      },

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

  .active a, a:active, a:focus, a:hover {
    color: #666fff !important;
  }

  .active a, a:active, a:focus {
    background-color: #ffffff !important;
  }

  a:hover {
    background-color: #f5f5f5 !important;
    border-radius: 2px;
  }

  .nav-container2 {
    border: #ddd solid 1px;
    border-radius: 3px;
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
