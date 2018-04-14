<template>
  <div class="main-wrapper">
    <div class="side-nav">
        <ul class="nav nav-pills nav-stacked nav-container"
            v-for="(menu, index) in menus.side"
            :key="index">
          <router-link v-for="(value, key) in menu"
                       :key="key"
                       :to="value.url" tag="li"
                       @click.native="setActive(key)"
                       :class="{ 'active': value.active }">
            <a class="nav-label" v-bind:class="{ 'builder-btn': index == 0 }">
              <span class="fa-stack fa-fw">
                <i :class="[ 'fa', value.icon ]"></i>
              </span>

              {{ value.label }}
            </a>
          </router-link>
        </ul>
        <p v-if="index < (menus.side.length - 1)"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import controls from '../mixins/controls';

export default {
  mixins: [
    controls,
  ],
  computed: {
    ...mapGetters([
      'menus',
    ]),
  },
};
</script>

<style scoped>
  @import url("/static/styles/navigation.css");
</style>
