<template>
  <div class="row">
    <div class="col-sm-offset-2 col-sm-7">
      <div class="main-wrapper">
        <router-view></router-view>
      </div>
    </div>
    <div class="col-sm-3">
      <app-navigation></app-navigation>
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
