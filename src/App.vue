<template>
  <div>
    <div id="app" class="container">
      <div class="row">
        <div id="headerBox" class="col-md-10 col-md-offset-1">
          <nav id="menubar" class="navbar navbar-default navbar-static-top">
            <div class="container">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">jetpacker.io</a>
              </div>
              <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="https://github.com/jetpacker" target="_blank">GitHub</a>
                  </li>
                </ul>
              </div><!--/.nav-collapse -->
            </div>
          </nav>

          <div class="col-md-9" id="headerCaption">
            <h3>Improve productivity in your team!</h3>
            <p id="headerSubCaption">Use jetpacker to generate portable Java(Script)? development environments</p>
          </div>
          <div class="col-md-3">
            <div class="navbar-collapse collapse">
              <button id="generateProject" class="btn btn-primary btn-really-large pull-right">
                Generate Project
              </button>
            </div>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="col-md-9 pre-scrollable">
          </div>
          <navigation></navigation>
        </div>
      </div>


      <div class="row" id="footer">

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
  #menubar {
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

  #generateProject {
    margin-top: 10px;
    margin-right: 2.8em;
  }
</style>
