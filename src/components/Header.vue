<template>
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top" v-bind:class="{ 'header-scrolled' : isScrolled }">
      <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
              </button>
              <a class="navbar-brand" href="/">jetpackr.com</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <router-link to="/" tag="li"
                             @click.native="setActive('Builder')"
                             :class="{ 'active': this.home }">
                  <a>Home</a>
                </router-link>
                <router-link to="/about" activeClass="active" tag="li"
                             @click.native="resetActives()">
                  <a>About</a>
                </router-link>
                <router-link to="/help" activeClass="active" tag="li"
                             @click.native="resetActives()">
                  <a>Help</a>
                </router-link>
              </ul>
          </div>
          <github-corners repo="jetpacker" bgColor="#d84565"></github-corners>
      </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';
  import controls from '../mixins/controls';

  export default {
    mixins: [
      controls,
    ],
    data() {
      return {
        isScrolled: false,
      };
    },
    computed: {
      ...mapGetters([
        'home',
      ]),
    },
    created() {
      window.addEventListener('scroll', () => {
        this.isScrolled = (window.scrollY > 5);
      });
      this.setActive('Builder');
    },
  };
</script>

<style scoped>
  @import url("/static/styles/header.css");
</style>
