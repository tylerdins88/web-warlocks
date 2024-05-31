<!-- BLOG PAGE 5/31/24 -->

<template>
    <div class="title-content col-span-full flex flex-col justify-center items-center text-center my-12 space-y-4">
     <h1>Blog</h1>
     <fwb-p class="font-light text-white-600 dark:text-white-400">
       This space is to keep updates on things the warlocks are doing, parts of projects, accomplishments, or fun things!
     </fwb-p>
   </div>
 <div class="blog-container grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 flex flex-wrap justify-center">
   <div v-for="post in blogPosts" :key="post.id" @click="openModal(post)" class="blog-post-card bg-white border border-gray-200 shadow hover:shadow-lg-blue-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4 my-8 flex flex-col">
     <!-- Card Content Here -->
     <div class="blogcard flex-grow flex flex-col items-center justify-center p-1">
       <img class="rounded-lg" :src="post.image" alt="Blog post image" />
       <h5 class="text-lg font-bold text-gray-900 dark:text-white mt-3">{{ post.title }}</h5>
       <p class="text-gray-500">{{ post.date }}</p>
     </div>
   </div>
   <blog-post-modal :post="selectedPost" :isVisible="isModalVisible" @close="isModalVisible = false"></blog-post-modal>
 </div>
</template>

<script setup>
import { FwbP } from 'flowbite-vue'
</script>

<script>
 // Import Modal component
 import BlogPostModal from '@/components/BlogPostModal.vue';
 //IMAGE IMPORTS FOR BLOG POST CARDS - 5/31/24
 import AMSOMMimg from '@/assets/blogphotos/AMSOMM.png';
 import Groovana from '@/assets/blogphotos/groovanascreen.png';


 export default {
   components: {
     'blog-post-modal': BlogPostModal
 },
   data() {
     return {
       isModalVisible: false,
     selectedPost: null,
       blogPosts: [
       
       {
         id: 2,
         title: 'The American Sommelier',
         date: '03 / 20 / 24',
         image: AMSOMMimg,
         blogtext: 'A good friend of mine needed a website built for a Wine Course that he was putting together. He wanted something simple that he would easily add content to, create his courses, upload course material, create appointments, etc. We decided to use Squarespace to create this, which was a interesting project. It allowed us to create a website pretty quickly and focus mostly on design, and making sure that everything is laid-out well and themed properly. However, it does really make me appreciate a REACT based webpage more now after having to see each page load vs just components and views that I have been used to.',
       },
         {
         id: 1,
         title: 'AWS Amplify V6 and Vue3.js ',
         date: '03 / 06 / 24',
         image: Groovana,
         blogtext: 'I have been working on rebuilding an app out of an old CRA project that I had built. In the CRA app, I had built the full authorization code, login, sign up etc from scratch in the server. This was a very good learning lesson. Now, I have been rebuilding in in Vue3js/Vite, and when it came time to implement the authorization package, I decided to use AWS Amplify, Cognito and DynamoDB. This also proved to be a little challenging since AWS V6 was released in Nov 2023, and there is very little to no documentation out for Vue3 thus far, everything is for V5. This took a bit of trial and error, digging into modules and lots of hair pulling, but I eventually got it figured out and working great!',
       },
       // {
       //   id: null,
       //   title: 'null',
       //   date: 'x / xx / xx',
       //   image: null,
       //   blogtext: 'null',
       // },
       ],
   };
 },
 methods: {
   openModal(post) {
     this.selectedPost = post;
     this.isModalVisible = true;
   }
 }
};
</script>
 

<style scoped>
.blog-container {
 margin: 1em;
 margin-top: 4em;
 overflow-y: auto;
}

p{
 margin: 1em;
}

.title-content {
 display: flex;
 align-items: center;
 margin-top: 5em;
}

.blog-post-card{
max-width: 400px;
}

h1 {
 text-align: center;
 margin-bottom: 10px;
 font-size: 3em;
 font-weight: 700;
}

h5 {
 padding-bottom: 1em;
}

.fade-enter-active, .fade-leave-active {
   transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
 opacity: 0;
}
</style>
 
 
 
 