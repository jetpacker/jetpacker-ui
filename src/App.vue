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
          <app-configurations></app-configurations>
        </div>
      </div>

      <div class="row" id="footer"></div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Configurations from './components/Configurations';

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appConfigurations: Configurations,
    },
  };
</script>

<style>
  legend {
    font-size: 15px;
  }
</style>
