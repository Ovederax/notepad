<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListRow",
  props: {
    msg: String,
  },
});
</script>

<template>
  <div class="row">
    <div class="col"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
