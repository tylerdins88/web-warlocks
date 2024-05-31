<template>
    <div class="splash-container">
      <div class="splash-content">
        <h1 class="fade-in">Web Warlocks</h1>
        <h2 class="fade-in">&lt; Full Stack Web { Development } /&gt;</h2>
        <p class="fade-in">We build things for the web.</p>
        <fwb-button gradient="blue" shadow @click="navigateToPortfolio" class="fade-in">View Our Work & Offerings</fwb-button>
      </div>
    </div>
  </template>

<script setup>
import { FwbButton } from 'flowbite-vue'
</script>
  
  <script>
  export default {
    name: 'SplashPage',
    methods: {
      navigateToPortfolio() {
        this.$router.push({ name: 'home' });
      }
    }
  }
  </script>
  
  <style scoped>
  .splash-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 5rem;
    height: 100vh;
    color: #fff;
    text-align: center;
    overflow-y: auto;
  }

  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 2s ease-in;
}
  
  .splash-content {
    max-width: 600px;
  }
  
  h1 {
    font-size: 3em;
    margin: 0.5em 0;
    font-weight: 700;
  }
  
  h2 {
    font-size: 2em;
    margin: 0.5em 0;
    font-weight: 700;
  }
  
  p {
    font-size: 1.2em;
    margin: 1em 0;
  }
  
  button {
    padding: 0.5em 1.5em;
    font-size: 1em;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }
  
  button:hover {
    color: #fff;
  }

  @media (max-width: 480px) {
  .splash-content {
    padding: 0 0.5em;
  }

  .fade-in {
  animation: fadeIn 2s ease-in;
}

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }

  button {
    padding: 0.5em 0.8em;
    font-size: 0.8em;
  }
}
  </style>
  