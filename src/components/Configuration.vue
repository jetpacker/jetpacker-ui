<template>
  <div class="main-container">
    <div class="row main-wrapper">
      <div class="page-info">
        <h1>Welcome to <span class="color-theme">jetpackr</span></h1>
        <h4>
          <span class="color-theme">jetpackr</span>
          generates portable development environment for
          <i class="fa fa-coffee fa-sm"></i>
          Java developers
        </h4>
      </div>
      <div class="row">
        <div class="col-sm-offset-1 col-sm-7">
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
  import Navigation from './Navigation';

  export default {
    components: {
      appNavigation: Navigation,
    },
  };
</script>
