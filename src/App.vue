<template>
  <div>
    <div id="app">
      <app-header></app-header>
      <div>
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './components/Header';
  import Footer from './components/Footer';

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer,
    },
    methods: {
      ...mapActions([
        'initialize',
      ]),
    },
    created() {
      console.log('store', this.$store);
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
