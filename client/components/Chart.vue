<script lang="ts">
import Vue from "vue";
import { Line } from "vue-chartjs";

export default Vue.extend({
  extends: Line,
  props: ["chartData", "options"],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
});
</script>
