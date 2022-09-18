<template>
  <div class="call-to-action-container">
    <button type="submit" name="Vote">Vote</button>
  </div>
</template>
<script lang="ts">
export default {
  name: "CallToActionContainer",
};
</script>
<style scoped>
.call-to-action-container {
  grid-area: call-to-action-container;
  border-radius: 0;
}
.call-to-action-container button {
  height: 2rem;
  width: 50%;
  background: #2c3e50;
  font-size: 3rem;
}
</style>
