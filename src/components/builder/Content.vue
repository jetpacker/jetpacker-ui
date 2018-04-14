<template>
  <div class="col-md-12 summary">
    <app-machine></app-machine>
    <app-kit></app-kit>
    <app-container name="DataStore"
                   description="Data Stores"></app-container>
    <app-container name="MessageBroker"
                   description="Message Brokers"></app-container>
    <app-container name="SearchEngine"
                   description="Search Engines"></app-container>
  </div>
</template>

<script>
import Machine from './Machine';
import Kit from './Kit';
import Container from './Container';

export default {
  components: {
    appMachine: Machine,
    appKit: Kit,
    appContainer: Container,
  },
};
</script>

<style scoped>
  @import url("/static/styles/summary.css");
</style>
