<template>
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top" v-bind:class="{ 'header-scrolled' : isScrolled }">
      <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
              </button>
              <a class="navbar-brand" href="/">jetpacker.io</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <router-link to="/builder" activeClass="active" tag="li">
                  <a>Builder</a>
                </router-link>
                <router-link to="/about" activeClass="active" tag="li">
                  <a>About</a>
                </router-link>
                  <router-link to="/help" activeClass="active" tag="li">
                    <a>Help</a>
                  </router-link>
                  <li>
                      <a href="https://github.com/jetpacker" target="_blank">GitHub</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        isScrolled: false,
      };
    },
    methods: {
      ...mapActions([
        'initialize',
      ]),
    },
    created() {
      window.addEventListener('scroll', () => {
        this.isScrolled = (window.scrollY > 5);
      });
    },
  };
</script>

<style scoped>
  @import url("/static/styles/header.css");
</style>
