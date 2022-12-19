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
  return routes["/"] || NotFound;
});
</script>

<template>
  <div class="website-wrapper">
    <NavigationBar />
    <component :is="currentView" />
  </div>
</template>

<style scoped>
div.website-wrapper {
  display: flex;
  flex-flow: column;
  height: 100vh;
}
</style>
