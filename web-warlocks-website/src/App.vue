<template>
  <div class="body">
    <MainHeader />
    <CustomNavbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import CustomNavbar from './components/CustomNavbar.vue'
import MainHeader from './components/MainHeader.vue'
</script>
