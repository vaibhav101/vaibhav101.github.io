<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import HomeContentVue from "./components/home/HomeContent.vue";
import NotFound from "./components/etc/NotFound.vue";
import AboutContent from "./components/about/AboutContent.vue";
import { ref, computed } from "vue";

// Minimal Routing Setup
const routes = {
  "/": HomeContentVue,
  "/about": AboutContent,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  // @ts-ignore
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});


</script>

<template>
  <NavigationBar />
  <component :is="currentView" />
</template>

<style scoped></style>
