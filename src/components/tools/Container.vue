<template>
  <div class="list-group-item">
    <div class="list-group-item-heading">
      <h4 class="summary-item-header">
        {{ description }}
        <a class="pull-right">
          <i class="fa fa-pencil-square-o fa-fw"></i><span class="summary-item-edit">Edit</span>
        </a>
      </h4>
    </div>
    <div class="list-group-item-text summary-item-content">
      {{ summary }}
      <!--<table class="table table-bordered" v-if="Object.keys(summary).length">-->
        <!--<thead>-->
          <!--<tr>-->
            <!--<th class="col-md-3">Name</th>-->
            <!--<th>Extensions</th>-->
          <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
          <!--<tr v-for="(extensions, kit) in summary">-->
            <!--<td>{{ kit }}</td>-->
            <!--<td>-->
              <!--{{ extensions }}-->
            <!--</td>-->
          <!--</tr>-->
        <!--</tbody>-->
      <!--</table>-->
      <!--<p v-else>-->
        <!--None.-->
      <!--</p>-->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      description: String,
    },
    computed: {
      summary() {
        const summary = {};
        const values = this.$store.getters.values.containers;
        const chosenContainers = Object.keys(values)
                                       .filter(key => values[key].install === true);

        const presets = Object.values(this.$store.getters.presets.containers)
                              .filter(container => container.type === this.name
                                      && chosenContainers.includes(container.name));
        console.log(this.name, chosenContainers);
        console.log(this.name, presets);

        return summary;
      },
    },
  };
</script>

<style>
  .summary-item-header {
    margin-top: 0px;
    padding-top: 0px;
  }
  .summary-item-content {
    padding-top: 10px;
  }
  .summary-item-edit {
    font-size: 15px;
    vertical-align: top;
  }
</style>
