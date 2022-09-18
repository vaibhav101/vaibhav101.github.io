<template>
  <div>
    <canvas> </canvas>
  </div>
</template>

<script setup lang="ts">
import { BackgroundScene } from "@/animation/BackgroundScene";
import { onMounted } from "vue";

onMounted(() => {
  const canvas = document.querySelector("canvas")!;
  new BackgroundScene(canvas);
  console.log("Done");
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
