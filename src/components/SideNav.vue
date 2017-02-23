<template>
  <div class="col-md-3 nav-side">
    <template v-for="(menu, index) in menus">
      <ul class="nav nav-pills nav-stacked nav-container">
        <router-link v-for="(value, key) in menu"
                     :to="value.url" tag="li"
                     @click.native="setActiveMenu(key)"
                     :class="{ 'active': value.active }">
          <a class="nav-label">
            <span class="fa-stack fa-fw">
              <i :class="[ 'fa', value.icon ]"></i>
            </span>

            {{ value.label }}
          </a>
        </router-link>
      </ul>
      <p v-if="index < (menus.length - 1)"></p>
    </template>
  </div>
</template>

<script>
  import controls from '../mixins/controls';

  export default {
    mixins: [
      controls,
    ],
    computed: {
      menus() {
        return this.$store.getters.menus.side;
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

  .nav-side {
    padding-right: 0px;
  }

  .nav-label {
    padding-left: 5px;
  }
</style>
