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
      this.initialize();
    },
  };
</script>

<style scoped>
  .content {
    padding-left: 0px;
  }
</style>
