<template>
  <aside class="col-span-3 h-full bg-gray-400">
    <ul class="p-4 flex flex-col justify-center w-full items-center">
      <li
        v-for="(link, index) of links"
        :key="link.name + index"
        class="p-4 cursor-pointer text-2xl hover:text-white"
      >
        <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      links: [
        { name: "Bitcoin", url: "/bitcoin" },
        { name: "Ethereum", url: "/ethereum" },
        { name: "Cardano", url: "/cardano" },
        { name: "Tether", url: "/tether" },
      ],
    };
  },
});
</script>
