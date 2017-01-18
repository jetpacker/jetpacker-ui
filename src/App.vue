<template>
  <div id="app" class="container">
    <div class="row">

    </div>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="col-md-8 pre-scrollable" style="max-height: 500px">
        </div>
        <div class="col-md-4" id="navigation">
            <navigation></navigation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation';

  export default {
    name: 'app',
    components: {
      navigation: Navigation,
    },
  };
</script>

<style>

</style>
