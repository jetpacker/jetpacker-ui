<template>
  <div class="main-wrapper">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Build Summary</h3>
      </div>
      <div class="panel-body">
        <app-content></app-content>
        <app-buttons></app-buttons>
      </div>
    </div>
  </div>
</template>

<script>
  import Content from './Content';
  import Buttons from './Buttons';

  export default {
    components: {
      appContent: Content,
      appButtons: Buttons,
    },
  };
</script>

<style scoped>
  @import url("/static/styles/builder.css");
</style>
