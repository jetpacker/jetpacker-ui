<template>
  <div class="col-md-3 settings">
    <template v-for="(menu, index) in menus">
      <ul class="nav nav-pills nav-stacked nav-container">
        <router-link v-for="(value, key) in menu"
                     :to="value.url" tag="li"
                     @click.native="toggle(key)"
                     :class="{ 'active': value.active }">
          <a>{{ value.label }}</a>
        </router-link>
      </ul>
      <p v-if="index < (menus.length - 1)"></p>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menus: [
          {
            virtualMachine: {
              active: false,
              label: 'Virtual Machine',
              url: '/settings/machine',
            },
            developmentKits: {
              active: false,
              label: 'Development Kits',
              url: '/settings/kits',
            },
            dataStores: {
              active: false,
              label: 'Data Stores',
              url: '/settings/containers/DataStore',
            },
            messageBrokers: {
              active: false,
              label: 'Message Brokers',
              url: '/settings/containers/MessageBroker',
            },
            searchEngines: {
              active: false,
              label: 'Search Engines',
              url: '/settings/containers/SearchEngine',
            },
          },
          {
            build: {
              active: false,
              label: 'Build Jetpack',
              url: '/tools/build',
            },
            reset: {
              active: false,
              label: 'Reset Settings',
              url: '/tools/reset',
            },
          },
        ],
      };
    },

    methods: {
      resetToggles() {
        this.menus.forEach((menu) => {
          Object.keys(menu).forEach((key) => {
            menu[key].active = false;
          });
        });
      },
      toggle(key) {
        this.resetToggles();

        this.menus.forEach((menu) => {
          if (key in menu) {
            menu[key].active = !menu[key].active;
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
