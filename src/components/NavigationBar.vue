<template>
  <nav
    class="navbar navbar-mobile"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item navbar-title-container" href="#/">
        <p class="navbar-brand-title">Vaibhav Paliwal</p>
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isNavbarActive == true }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleNavbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isNavbarActive == true }"
    >
      <div class="navbar-start">
        <a class="navbar-item" href="#/"> Home </a>
        <a class="navbar-item" href="#/about"> About </a>
        <a class="navbar-item" href="#/blog"> Blog </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let isNavbarActive = ref(false);

function toggleNavbar() {
  isNavbarActive.value = !isNavbarActive.value;
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap");

/* * {
  border: 1px solid red;
} */

.navbar-brand-title {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
}

/* .navbar-mobile .navbar-menu {
  height: 100vh;
} */

.navbar-mobile .navbar-item {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-size: x-large;
}

.navbar-burger {
  margin: auto;
  height: 5rem;
  width: 5rem;
}

.navbar-mobile .navbar-title-container {
  flex: 1;
}
</style>
