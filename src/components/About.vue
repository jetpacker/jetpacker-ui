<template>
  <div class="row">
    <div class="col-sm-offset-2 col-sm-8">
      <div class="main-wrapper">
        <div class="panel panel-primary">
          <div class="panel-body">
            <div class="media">
              <div class="media-body">
                <h2 class="media-heading">
                  What is <span class="color-theme">jetpackr</span>
                </h2>
                This is a code generator that creates
                a <span class="color-theme">jetpack</span>,
                a portable development environment for Java programmers.
                <span class="color-theme">jetpacker</span> is inspired
                by PuPHPet, Phansible, Rove, and Spring Initializr.
              </div>
            </div>

            <div class="media">
              <div class="media-body">
                <h2 class="media-heading">
                  What exactly is a <span class="color-theme">jetpack</span>
                </h2>
                A <span class="color-theme">jetpack</span> is a Java
                development environment that is powered by Vagrant,
                Ansible, and Docker.
                Armed with these tools, any Java developers
                can confidently:
                <ul>
                  <li>
                    Work on several projects that have different application architecture.
                  </li>
                  <li>
                    Share their projects with anyone without having to struggle with initial
                    installation and setup.
                  </li>
                  <li>
                    Keep their PCs organized and clean from most of the development tools.
                  </li>
                </ul>
              </div>
            </div>

            <div class="media">
              <div class="media-body">
                <h2 class="media-heading">
                  So I need to know Vagrant, Ansible, and Docker?
                </h2>
                Not necessarily. All you need to do is follow the instructions
                from the documentation, generate
                a <span class="color-theme">jetpack</span>, ignite it, and start coding.
                However, having knowledge in these technologies will give
                you more options in customizations.
                So it's always good to learn them.
              </div>
            </div>

            <div class="media">
              <div class="media-body">
                <h2 class="media-heading">
                  Who is your target audience?
                </h2>
                Programmers. This includes freelancers, hobbyists, teachers,
                students, etc. They can
                benefit from this project, regardless of their experience levels.
              </div>
            </div>

            <div class="media">
              <div class="media-body">
                <h2 class="media-heading">
                  Can I contribute to this project?
                </h2>
                Of course. We will always welcome any contributions and suggestions.
              </div>
            </div>

            <div class="media">
              <div class="media-body">
                <h2 class="media-heading">
                  Credits
                </h2>
                To all developers of the open source libraries and services
                used by this project.
              </div>
            </div>
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
