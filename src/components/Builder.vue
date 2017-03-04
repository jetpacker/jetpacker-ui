<template>
  <div class="main-container">
    <div class="row main-wrapper">
      <div class="page-info">
        <h1>Welcome to <span class="color-theme">Jetpack</span> Builder</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h4>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <router-view></router-view>
        </div>
        <div class="col-sm-4">
          <app-side-nav></app-side-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SideNav from './SideNav';

  export default {
    components: {
      appSideNav: SideNav,
    },
  };
</script>
