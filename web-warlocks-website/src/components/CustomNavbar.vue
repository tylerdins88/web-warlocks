<template>
    <nav>
      <router-link to="/">
        <a :class="{ 'router-link-exact-active': isActive('/') }">Home</a>
      </router-link>
      <router-link to="/projects">
        <a :class="{ 'router-link-exact-active': isActive('/projects') }">Projects</a>
      </router-link>
      <router-link to="/offer">
        <a :class="{ 'router-link-exact-active': isActive('/offer') }">Offerings</a>
      </router-link>
      <router-link to="/contact">
        <a :class="{ 'router-link-exact-active': isActive('/contact') }">Contact</a>
      </router-link>
      <router-link to="/about">
        <a :class="{ 'router-link-exact-active': isActive('/about') }">About Us</a>
      </router-link>
    </nav>
</template>
  

<script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const isActive = (routePath) => {
    return route.path === routePath;
  };
</script>



<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>