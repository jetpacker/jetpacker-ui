<template>
  <div>
    <div id="app">
      <app-header></app-header>
      <div v-if="initialized">
        <router-view></router-view>
      </div>
      <div v-else>
        <app-unavailable></app-unavailable>
      </div>
      <app-footer></app-footer>
    </div>
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
    computed: {
      ...mapGetters([
        'initialized',
      ]),
    },
    methods: {
      ...mapActions([
        'initialize',
      ]),
    },
    created() {
      this.initialize();
    },
  };
</script>

<style scoped>
  @import url("/static/styles/app.css");

  .content {
    padding-left: 0px;
  }
</style>
