<template>
  <nav class="side-nav">
    <ul class="nav nav-pills nav-stacked nav-container"
        v-for="(menu, index) in menus.builder"
        :key="`menu-${index}`">
      <router-link v-for="(value, key) in menu"
                   :key="key"
                   :to="value.url" tag="li"
                   @click.native="setActive(key)"
                   :class="{ 'active': value.active }">
        <a class="nav-label builder-btn">
              <span class="fa-stack fa-fw">
                <i :class="[ 'fa', value.icon ]"></i>
              </span>

          {{ value.label }}
        </a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import controls from '../../../mixins/controls';

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
