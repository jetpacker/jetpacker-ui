<template>
  <div class="col-md-3 settings">
    <ul class="nav nav-pills nav-stacked nav-container">
      <router-link to="/setting/machine" tag="li"
                   @click.native="show('virtualMachine')"
                   :class="{ 'active': settings['virtualMachine'] }">
        <a>Virtual Machine</a>
      </router-link>
      <router-link to="/setting/kits" tag="li"
                   @click.native="show('developmentKits')"
                   :class="{ 'active': settings['developmentKits'] }">
        <a>Development Kits</a>
      </router-link>
      <router-link to="/setting/containers/DataStore" tag="li"
                   @click.native="show('dataStores')"
                   :class="{ 'active': settings['dataStores'] }">
        <a>Data Stores</a>
      </router-link>
      <router-link to="/setting/containers/MessageBroker" tag="li"
                   @click.native="show('messageBrokers')"
                   :class="{ 'active': settings['messageBrokers'] }">
        <a>Message Brokers</a>
      </router-link>
      <router-link to="/setting/containers/SearchEngine" tag="li"
                   @click.native="show('searchEngines')"
                   :class="{ 'active': settings['searchEngines'] }">
        <a>Search Engines</a>
      </router-link>
    </ul>
    <p />
    <ul class="nav nav-pills nav-stacked nav-container">
      <li><a href="" @click.prevent="">Build Jetpack</a></li>
      <li><a href="" @click.prevent="">Reset Settings</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        settings: {
          virtualMachine: false,
          developmentKits: false,
          dataStores: false,
          messageBrokers: false,
          searchEngines: false,
        },
      };
    },

    methods: {
      show(setting) {
        Object.keys(this.settings).forEach((key) => {
          if (key === setting) {
            this.settings[key] = !this.settings[key];
          } else {
            this.settings[key] = false;
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

  .settings {
    padding-right: 0px;
  }
</style>
