<template>
  <main class="col-span-9 h-full bg-red-900">
    <div class="p-8 flex justify-center h-screen">
    <h1 class="text-6xl text-white capitalize font-bold">{{ this.token }}</h1>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["token"],
  created() {
    console.log("la prop es", this.token);
  },
});
</script>
