<template>
  <div class="main-container">
    <div class="row main-wrapper">
      <div class="page-info">
        <h1 v-html="title"></h1>
        <h4 v-html="subTitle"></h4>
<!--        <h4 v-html="compiledTitle"></h4>-->
      </div>
      <div class="row">
        <div class="col-sm-offset-2 col-sm-7">
          <router-view></router-view>
        </div>
        <div class="col-sm-3">
          <app-navigation></app-navigation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controls from '../mixins/controls';
import commons from '../mixins/commons';
import Navigation from './Navigation';

export default {
  components: {
    appNavigation: Navigation,
  },
  data() {
    return {
      title: 'Welcome to <span class="color-theme">jetpackr</span>',
      subTitle: `
            <span class="color-theme">jetpackr</span>
            generates isolated development environments for software developers`,
    };
  },
  mixins: [
    controls,
    commons,
  ],
  // computed: {
  //   compiledTitle() {
  //     return this.marked(this.blabla);
  //   },
  // },
  created() {
    this.setActive('Builder');
  },
};
</script>
