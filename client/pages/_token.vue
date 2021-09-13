<template>
  <div class="grid grid-cols-12 grid-rows-1">
    <Drawer />
    <ChartContainer :token="this.token"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data(){
    return {
      token: null
    }
  },
  created() {
    this.token = this.$route.params.token;
  }
});
</script>
