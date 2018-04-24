<template>
  <div class="row">
    <div class="col-sm-offset-2 col-sm-8">
      <div class="panel panel-primary">
        <div class="panel-body info">
          <h2>About <span class="color-theme">jetpackr</span></h2>
          <p>
            <span class="color-theme">jetpackr</span> is a free application that
            generates a <span class="color-theme">jetpack</span>, a highly
            disposable development environment that is powered by Vagrant, Ansible,
            and optionally Docker. Disposable development environment can greatly
            improve developers' productivity. It solves many common issues like:
          </p>
          <ul>
            <li>
              Managing several projects that have different application architectures.
            </li>
            <li>
              Difficulty to share projects with anyone because of compatibility issues.
            </li>
            <li>
              Manual installations and setups of most applications, services,
              and tools in any software projects.
            </li>
            <li>
              PCs/Macs become disorganized and littered by most of the development tools.
            </li>
            <li>
              Worrying of making mistakes when experimenting with new technologies
            </li>
            <li>
              And so on.
            </li>
          </ul>
          <p>You don't necessarily need to know Vagrant, Ansible, and Docker to use
            a <span class="color-theme">jetpack</span>. All you need to do:</p>
          <ol>
            <li>
              Download and install VirtualBox (5.2+)
            </li>
            <li>
              Download and install Vagrant (2.0+)
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
