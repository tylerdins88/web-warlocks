<!-- BlogModal.vue -->
<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <h2>{{ post.title }}</h2>
        <p>{{ post.date }}</p>
        <img :src="post.image" alt="Post image" class="modal-image">
        <div class="blog-text-container">
          <p>{{ post.blogtext }}</p>
        </div>
      </div>
    </div>
  </template>
  
    
    <script>
    export default {
      props: ['post', 'isVisible'],
      methods: {
        close() {
          this.$emit('close');
        }
      }
    }
    </script>
    
    <style scoped>
    .modal {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .modal-content {
      background: white;
      padding: 10px;
      border-radius: 5px;
      max-width: 500px;
      width: 90%;
    }
  
    .modal-image{
      border-radius: 5px;
    }
    
    .blog-text-container {
    max-height: 15em; /* Adjust based on your line height and font size */
    overflow-y: auto; /* Enables vertical scrolling */
    margin-top: .5em;
    margin-bottom: .5em;
    padding: .5em
    } 
  
    .close {
      float: right;
      font-size: 28px;
      cursor: pointer;
      color: black;
    }
  
    p{
      color:black;
      margin-top: 1em;
    }
  
    h2{
      color: black;
      font-weight: 700;
    }
    </style>
    