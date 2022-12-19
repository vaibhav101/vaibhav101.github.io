<template>
  <div class="scroll-wrapper">
    <section
      class="container-wrapper"
      :class="{ tabletPlus: mq.tabletPlus, laptopPlus: mq.laptopPlus }"
    >
      <div class="image-container" :class="mq.current">
        <img
          src="https://via.placeholder.com/150"
          alt="Home Image"
          class="hero-image"
        />
      </div>
      <div
        class="text-container"
        :class="{ tabletPlus: mq.tabletPlus, laptopPlus: mq.laptopPlus }"
      >
        <div class="headline-wrapper">
          <p>Make Shit Happen</p>
        </div>
        <div class="body-text-wrapper">
          <p>
            Jake is leading design teams and crafting memorable products that
            transform businesses.
          </p>
        </div>
      </div>
    </section>
    <section
      class="container-wrapper"
      :class="{ tabletPlus: mq.tabletPlus, laptopPlus: mq.laptopPlus }"
    >
      <div class="image-container" :class="mq.current">
        <img
          src="https://via.placeholder.com/150"
          alt="Home Image"
          class="hero-image"
        />
      </div>
      <div
        class="text-container"
        :class="{ tabletPlus: mq.tabletPlus, laptopPlus: mq.laptopPlus }"
      >
        <div class="headline-wrapper">
          <p>Make Shit Happen</p>
        </div>
        <div class="body-text-wrapper">
          <p>
            Jake is leading design teams and crafting memorable products that
            transform businesses.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useMq } from "vue3-mq";

const mq = useMq();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap");

.scroll-wrapper {
  width: 100%;
  flex-grow: 1;
  scroll-snap-type: y mandatory;
  overflow: scroll;
}

section {
  scroll-snap-align: start;
  height: 100%;
}
.container-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-wrapper.laptopPlus {
  flex-direction: row;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Chakra Petch", sans-serif;
  text-align: center;
  font-weight: 700;
  padding: 0 24px;
}

.text-container .headline-wrapper {
  font-size: 2.1rem;
  margin-bottom: 12px;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px 24px 12px 24px;
}

.hero-image {
  width: 100%;
  padding: 24px;
  max-width: 584px;
}
</style>
