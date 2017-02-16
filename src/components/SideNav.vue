<template>
  <div id="configurations" class="col-md-3">
    <ul class="nav nav-pills nav-stacked nav-container">
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
      <router-link to="/configuration/containers/dataStores" tag="li"
                   @click.native="show('dataStores')"
                   :class="{ 'active': configurations['dataStores'] }">
        <a>Data Stores</a>
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
    <p />
    <ul class="nav nav-pills nav-stacked nav-container">
      <li><a href="" @click.prevent="">Build</a></li>
      <li><a href="" @click.prevent="">Reset</a></li>
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
          dataStores: false,
          messageBrokers: false,
          searchEngines: false,
        },
      };
    },

    methods: {
      show(configuration) {
        Object.keys(this.configurations).forEach((key) => {
          if (key === configuration) {
            this.configurations[key] = !this.configurations[key];
          } else {
            this.configurations[key] = false;
          }
        });
      },

      showPanel(panel) {
        Object.keys(this.presets).forEach((key) => {
          if (key === panel) {
            this.presets[key] = !this.presets[key];
          } else {
            this.presets[key] = false;
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

  .nav-container {
    border: #ddd solid 1px;
    border-radius: 3px;
  }

  #configurations {
    padding-right: 0px;
  }
</style>
