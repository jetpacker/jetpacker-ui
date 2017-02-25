<template>
  <div class="row">
    <div class="col-md-10 col-md-offset-1 header-box">
      <nav class="navbar navbar-default navbar-static-top menubar">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">jetpacker.io</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
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
          </div><!--/.nav-collapse -->
        </div>
      </nav>

      <div class="col-md-9 header-caption">
        <h3>
          <i class="fa fa-rocket fa-lg"></i>
          Kickstart your Java project with a Jetpack!
        </h3>
        <p class="header-sub-caption">
          Jetpacker helps generate portable development environments for Java developers.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url("/static/styles/header.css");
</style>
