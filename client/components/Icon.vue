<template>
  <div v-html="src" :class="className"></div>
</template>
<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
    },
  },
  computed: {
    src() {
      const src = require(`../assets/icons/${this.name}.svg?raw`);
      return src;
    },
    className() {
      return this.class
    }
  },
};
</script>
