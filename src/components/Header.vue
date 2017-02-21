<template>
  <div class="row">
    <div id="headerBox" class="col-md-10 col-md-offset-1">
      <nav id="menuBar" class="navbar navbar-default navbar-static-top">
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

      <div class="col-md-9" id="headerCaption">
        <h3>Kickstart your Java project with a Jetpack!</h3>
        <p id="headerSubCaption">
          Jetpacker helps generate portable development environments for Java developers.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #menuBar {
    margin-left: 0px;
    margin-right: 0px;;
  }

  #headerBox {
    padding: 0px 0px 0px 0px;
  }

  #headerCaption {
    margin-top: -20px;
    margin-bottom: 20px;
  }

  #headerSubCaption {
    color: grey;
  }
</style>
