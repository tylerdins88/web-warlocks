<template>
  <div class="body">
  <header>
    <img alt="Web Warlock" class="webWarlock" src="@/assets/homephotos/the-web-warlock.jpg" />

    <div class="wrapper">
      <div class="greetings">
        <h1 class="welcomeMsg">Welcome to the Good Stuff.</h1>
        <h3>
          Your go to coders for apps and websites built with:
          <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
          <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> or
          <a href="https://create-react-app.dev/" target="_blank" rel="noopener">React</a> or
          <a href="https://www.squarespace.com/" target="_blank" rel="noopener">SquareSpace</a>.
        </h3>
      </div>

    </div>
  </header>
  <CustomNavbar />
  <RouterView />
</div>
</template>

<script setup>
import {  RouterView } from 'vue-router'; //RouterLink,
import CustomNavbar from './components/CustomNavbar.vue';

</script>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.webWarlock {
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow:
    0 0 20px 0 rgba(255, 87, 34, 0.7),
    0 0 40px 0 rgba(255, 87, 34, 0.5),
    0 0 60px 0 rgba(255, 87, 34, 0.3);
  transform: scale(1.01);
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
</style>
