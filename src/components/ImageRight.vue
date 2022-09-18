<template>
  <div class="image-right">
    <img src="https://via.placeholder.com/760x680">
  </div>
</template>
<script>
export default {
  name: "ImageRight",
};
</script>

<style scoped>
.image-right {
  width: -moz-available;
  grid-area: image-right;
}

.image-right img {
  height: auto;
  max-width: 100%;
}
</style>
