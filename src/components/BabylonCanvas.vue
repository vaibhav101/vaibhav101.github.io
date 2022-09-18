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
  const scene = new BackgroundScene(canvas);
  this.engine = scene.engine;
  console.log("Done");
});

window.addEventListener("resize", function () {
  this.engine.resize();
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
