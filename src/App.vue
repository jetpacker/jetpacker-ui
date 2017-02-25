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
  import Header from './components/Header';
  import Footer from './components/Footer';

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer,
    },
    created() {
      console.log('store', this.$store);
      this.$store.dispatch('INITIALIZE');
    },
  };
</script>

<style>
  .content {
    padding-left: 0px;
  }
  @import url('assets/styles.css');
</style>
