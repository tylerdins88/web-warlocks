<template>
  <div class="body">
    <MainHeader />
    <RouterView />
  </div>

</template>

<script setup>
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';

</script>


<style>

a {
  color:red;
}
</style>