<script setup lang="ts">
import ImageRight from "@/components/ImageRight.vue";
import TopHeading from "@/components/TopHeading.vue";
import BodyText from "@/components/BodyText.vue";
import CallToActionContainer from "@/components/CallToActionContainer.vue";
</script>

<template>
  <div class="body-container">
    <ImageRight />
    <TopHeading />
    <BodyText />
    <CallToActionContainer />
  </div>
</template>
<style scoped>
.body-container {
  align-self: center;
  justify-self: center;
  align-items: start;
  display: grid;
  max-width: 1200px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 100px;
  grid-template-areas:
    "top-heading image-right"
    "body-text image-right"
    "call-to-action-container image-right";
  grid-area: body-container;
  transition: all 500ms;
}
</style>
