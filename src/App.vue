<template>
  <div id="app">
    <app-header></app-header>
    <div class="main-container">
      <div class="row main-wrapper">
        <div v-if="initialized">
          <div class="page-info">
            <h1 v-html="title"></h1>
            <h4 v-html="subTitle"></h4>
          </div>
          <router-view></router-view>
        </div>
        <div v-else>
          <app-unavailable></app-unavailable>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './components/Header';
import Footer from './components/Footer';
import Unavailable from './components/Unavailable';

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appFooter: Footer,
    appUnavailable: Unavailable,
  },
  methods: {
    ...mapActions([
      'initialize',
    ]),
  },
  data() {
    return {
      title: '<span class="color-theme">jetpackr</span>',
      subTitle: 'Completely free isolated development environments generator',
    };
  },
  computed: {
    ...mapGetters([
      'initialized',
    ]),
  },
  created() {
    this.initialize();
  },
};
</script>

<style scoped>
  @import url("/static/styles/app.css");
</style>
