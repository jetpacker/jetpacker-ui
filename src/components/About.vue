<template>
  <div class="row">
    <div class="col-sm-offset-2 col-sm-8">
      <div class="main-wrapper">
        <div class="panel panel-primary">
          <div class="panel-body info">
            <h2>About <span class="color-theme">jetpackr</span></h2>
            <p>
              <span class="color-theme">jetpackr</span> is a code generator that produces
              a <span class="color-theme">jetpack</span>, a semi automated isolated
              development environment that is powered by Vagrant, Ansible,
              and optionally Docker.

              Armed with these tools, any developers can confidently:
            </p>
            <ul>
              <li>
                Work on several projects that have different application architecture.
              </li>
              <li>
                Share their projects with anyone without having to struggle with
                common compatibility issues.
              </li>
              <li>
                Skip the manual installations of most applications, services,
                and tools in their project.
              </li>
              <li>
                Keep their PCs organized and clean from most of the development tools.
              </li>
              <li>
                Experiment with new technologies without worrying of making mistakes.
              </li>
            </ul>
            <p>You don't necessarily need to know Vagrant, Ansible, and Docker to use
              a <span class="color-theme">jetpack</span>. All you need to do:</p>
            <ol>
              <li>
                Download and install VirtualBox
              </li>
              <li>
                Download and install Vagrant
              </li>
              <li>
                Generate a <span class="color-theme">jetpack</span> from this website.
              </li>
              <li>
                Unzip it as a folder, open a console, and go there.
              </li>
              <li>
                Type: <mark>vagrant up</mark>
              </li>
            </ol>
            That's it!!!
            <h2>Credits</h2>
            <p>
              Special thanks to open source community who work tirelessly days and nights
              on applications, frameworks, and services used by this project!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commons from '../mixins/commons';

export default {
  mixins: [
    commons,
  ],
};
</script>

<style scoped>
  @import url("/static/styles/about.css");
</style>
