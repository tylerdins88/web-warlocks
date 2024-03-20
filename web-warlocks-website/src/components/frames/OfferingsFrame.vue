<template>
  <div class="offeringsFrame">
    <div class="content">
      <h3 class="offeringsTitle">{{ offerings.title }}</h3>
      <p class="offeringsDescrip">{{ offerings.description }}</p>
      <div class="links">
        <a :href="offerings.website" target="_blank">Read More Here</a>
      </div>
    </div>
    <div class="imageContainer">
      <img class="offeringsImage" :src="offerings.image" alt="offerings Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offerings: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.offeringsFrame {
  border: 1px solid rgba(255, 87, 34, 0.7);
  border-radius: 15px;
  padding: 16px;
  margin-top: 60px;
  text-align: center;
  display: flex;
  flex-direction: row;
}

.offeringsFrame:hover {
  box-shadow:
    0 0 40px 0 rgba(255, 87, 34, 0.5),
    0 0 60px 0 rgba(255, 87, 34, 0.3);
  transform: scale(1.01);
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}

.content {
  flex: 2;
  padding-right: 20px; /* Adjust spacing between image and content */
  width: 600px;
}

.imageContainer {
  flex: 1;
}

.offeringsImage {
  display: inline;
  height: 240px;
  width: 240px;
  margin-top: 12p;
}

.offeringsTitle {
  font-size: 32px;
  border-bottom: 1px solid rgba(255, 87, 34, 0.7);
  padding-top: 20px;
}

.offeringsDescrip {
  padding-top: 20px;
}

.links {
  margin-top: 20px;
  text-align: left;
}

a {
  margin-right: 10px;
}

.offeringsFrame a:hover {
  background-color: silver;
}
</style>
