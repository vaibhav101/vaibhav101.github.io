<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="notification-bar-top"></div>
    <div class="navbar-main"></div>
    <div class="body-main-wrapper">
      <div class="body-main">
        <div class="body-col-left">
          <div class="heading-main">Good Morning!</div>
          <div class="text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus semper urna, vel dictum sapien rutrum ac. Nunc efficitur vestibulum nisi. Quisque vulputate hendrerit eleifend. Fusce ultrices tellus massa, in euismod ex lobortis sit amet. Quisque efficitur iaculis mi, porttitor efficitur orci lobortis at</div>
          <div class="call-to-action">f</div>
        </div>
        <div class="body-col-right">
          <img src="https://via.placeholder.com/760x680" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-col-right img {
  height: auto;
  max-width: 100%;
}

.heading-main {
  padding-top: 5rem;
  font-size: 3rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bolder;
}

.text-main {
  padding-top: 1rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.notification-bar-top {
  height: 5rem;
  background: black;
}

.navbar-main {
  height: 5rem;
  border: 4px solid black;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.body-main {
  padding-top: 5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 30% 40%;
  justify-content: space-around;
}

.body-col-left {
  display: flex;
  flex-direction: column;
}
</style>
