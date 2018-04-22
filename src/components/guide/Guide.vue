<template>
  <div class="row">
    <app-navigation></app-navigation>
    <div class="col-sm-offset-1 col-sm-8">
      <div class="panel panel-primary">
        <div class="panel-body">
          fafadsfsa fafsdasfdafsd
          fasffsdsdcafa<br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controls from '../../mixins/controls';
import Navigation from './Navigation';

export default {
  components: {
    appNavigation: Navigation,
  },
  mixins: [
    controls,
  ],
};
</script>
