<template>
  <div v-html="src"></div>
</template>
<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      const src = require(`../assets/icons/${this.name}.svg?raw`);
      return src;
    },
  },
};
</script>
