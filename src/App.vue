<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="notification-header"></div>
    <div class="header"></div>
    <div class="body-container">
      <div class="image-right"></div>
      <div class="top-heading"></div>
      <div class="body-text"></div>
      <div class="call-to-action-container"></div>
    </div>
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

.notification-header {
  grid-area: notification-header;
}

.header {
  grid-area: header;
}

.body-container {
  justify-self: center;
  display: grid;
  max-width: 1800px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "top-heading image-right"
    "body-text image-right"
    "call-to-action-container image-right";
  grid-area: body-container;
  transition: all 500ms;
}

.image-right {
  grid-area: image-right;
}

.top-heading {
  grid-area: top-heading;
}

.body-text {
  grid-area: body-text;
}

.call-to-action-container {
  grid-area: call-to-action-container;
}

.container {
  height: 100%;
  margin: 0;
}

/* For presentation only, no need to copy the code below */
.container * {
  border: 1px solid red;
  position: relative;
}

.container *:after {
  content: attr(class);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
