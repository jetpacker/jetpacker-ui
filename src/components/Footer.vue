<template>
  <footer>
      <div>
          <div class="row">
              <div class="col-md-12">
                  <span class="copyright">
                    From
                    <a class="creator" :href="wastefactory_url">wastefactory</a>
                    and
                    <a class="creator" :href="forseti_url">forseti</a>
                    with
                    <i class="fa fa-heart fa-sm heart"></i>
                    <i class="fa fa-heart fa-sm heart"></i>
                    <i class="fa fa-heart fa-sm heart"></i>
                  </span>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      wastefactory_url: false,
      forseti_url: false,
    };
  },
};
</script>

<style scoped>
  @import url("/static/styles/footer.css");
</style>
