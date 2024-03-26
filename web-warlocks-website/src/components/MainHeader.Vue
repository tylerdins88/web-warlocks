<template>
  <div class="flex flex-col md:flex-row justify-between items-center">
    <img alt="Web Warlock" class="webWarlock md:order-1" src="@/assets/homephotos/the-web-warlock.jpg" /> <!-- Move to left on desktop -->
    <div class="order-2 md:order-2"> <!-- Keep in the same position -->
      <div class="wrapper">
        <div class="greetings">
          <h1 class="heading">Web Warlocks.</h1>
          <h2 class="welcomeMsg">Welcome to the Good Stuff.</h2>
          <h5>
            Your go-to coders for apps and websites built with:
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> or
            <a href="https://create-react-app.dev/" target="_blank" rel="noopener">React</a> or
            <a href="https://www.squarespace.com/" target="_blank" rel="noopener">SquareSpace</a>.
          </h5>
        </div>
      </div>
    </div>
  </div>
  <CustomNavbar class="mt-4 md:mt-0 mx-auto" /> <!-- Centered below -->
</template>


<script setup>
import CustomNavbar from './CustomNavbar.vue';

</script>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

h2 {
  font-size: 1.2rem;
  position: relative;
}

.greetings h1,
.greetings h2,
.greetings h5 {
  margin-left: 2em;
  position: relative;
}
</style>