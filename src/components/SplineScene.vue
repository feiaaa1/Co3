<template>
<div class="background-spline">
  <Vue3Spline :scene="props.scene"/>
</div>
</template>


<script setup>
import {Vue3Spline} from "vue3-spline";
const props = defineProps(['scene'])
</script>


<style scoped>
.background-spline {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it stays behind other content */
}
</style>
