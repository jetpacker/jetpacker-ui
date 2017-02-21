<template>
  <div class="col-md-3 settings">
    <template v-for="(menu, index) in menus">
      <ul class="nav nav-pills nav-stacked nav-container">
        <router-link v-for="(value, key) in menu"
                     :to="value.url" tag="li"
                     @click.native="setActiveMenu(key)"
                     :class="{ 'active': value.active }">
          <a>
            <i :class="[ 'fa', value.icon, 'fa-lg' ]"></i>
            {{ value.label }}
          </a>

        </router-link>
      </ul>
      <p v-if="index < (menus.length - 1)"></p>
    </template>
  </div>
</template>

<script>
  export default {
    computed: {
      menus() {
        return this.$store.getters.menus.side;
      },
    },
    methods: {
      setActiveMenu(item) {
        const payload = {
          item,
          location: 'side',
        };
        this.$store.dispatch('SET_ACTIVE_MENU', payload);
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
