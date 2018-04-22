<template>
  <div class="row">
    <app-navigation></app-navigation>
    <div class="col-sm-offset-2 col-sm-7">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import controls from '../../../mixins/controls';
import Navigation from './Navigation';

export default {
  components: {
    appNavigation: Navigation,
  },
  mixins: [
    controls,
  ],
  created() {
    this.setActive('Builder');
  },
};
</script>

<style scoped>
  .topz {
    margin-top: 0%;
  }
</style>
