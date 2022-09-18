<script setup lang="ts">
import NotificationHeader from "@/components/NotificationHeader.vue";
import MainHeader from "@/components/MainHeader.vue";
import BodyContainer from "@/components/BodyContainer.vue";
</script>

<template>
  <div class="container">
    <NotificationHeader />
    <MainHeader />
    <BodyContainer />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.2fr 2.6fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "notification-header"
    "header"
    "body-container";
}

.container {
  height: 100%;
  margin: 0;
}
</style>
