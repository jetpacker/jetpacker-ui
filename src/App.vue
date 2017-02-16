<template>
  <div>
    <div id="app" class="container">
      <div class="row">
        <app-header></app-header>
      </div>

      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="col-md-9">
            <router-view></router-view>
          </div>
          <app-side-nav></app-side-nav>
        </div>
      </div>

      <div class="row" id="footer"></div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import SideNav from './components/SideNav';

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appSideNav: SideNav,
    },
    created() {
      console.log('store', this.$store);
      this.$store.dispatch('INITIALIZE');
    },
  };
</script>

<style>
  legend {
    font-size: 15px;
  }
</style>
