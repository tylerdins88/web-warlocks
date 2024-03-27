<template>
  <div class="bodywrapper">
  <div class="flex flex-col md:flex-row justify-between items-center">
    <img alt="Web Warlock" class="webWarlock md:order-1" src="@/assets/homephotos/the-web-warlock.jpg" />
    <div class="order-2 md:order-2">
      <div class="wrapper">
        <div class="greetings">
          <h1 class="heading">Web Warlocks.</h1>
          <h2 class="welcomeMsg">Welcome to the Good Stuff</h2>
          <h5>
            Your go-to coders for apps and websites built with:
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> or
            <a href="https://create-react-app.dev/" target="_blank" rel="noopener">React</a> or
            <a href="https://www.squarespace.com/" target="_blank" rel="noopener">SquareSpace</a>
          </h5>
        </div>
      </div>
    </div>
  </div>
  
  <CustomNavbar class="mt-4 md:mt-0 mx-auto" /> <!-- Centered below -->
</div>
</template>


<script setup>
import CustomNavbar from './CustomNavbar.vue';

</script>

<style scoped>


.bodywrapper {
 background-image:  linear-gradient(to left, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.65) 100%), 
 url("@/assets/homephotos/runematrix.jpg");
 background-size: cover;
 padding-left: 2em;
 padding-right: 2em;
}

.webWarlock {
  display: block;
  width: 150px;
  height: 150px;
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

.heading {
  display: flex;
  font-weight: 700;
  font-size: 4rem;
  margin-left: 1em;
  top: -10px;
  position: relative;
  text-shadow: #181818 5px 2px 3px;
}

h2 {
  display: flex;
  font-size: 2rem;
  margin-left: 2em;
  position: relative;
  text-shadow: #181818 5px 2px 3px;
}

h5 {
  display: block;
  font-size: 1rem;
  margin-left: 4.25em;
  position: relative;
  text-shadow: #181818 10px 2px 5px;
}


</style>