<template>
  <div class="main-container">
    <div class="row main-wrapper">
      <div class="page-info">
        <h1>Welcome to <span class="color-theme">Jetpackr</span></h1>
        <h4>
          Jetpackr generates portable development environment for Java developers.
        </h4>
      </div>
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-7">
          <router-view></router-view>
        </div>
        <div class="col-sm-3">
          <app-navigation></app-navigation>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from './Navigation';

  export default {
    components: {
      appNavigation: Navigation,
    },
  };
</script>
