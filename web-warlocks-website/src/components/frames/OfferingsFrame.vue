<template>
  <div class="offeringsFrame">
    <img class="offeringsImage" :src="offerings.image" alt="offerings Image" />
    <h3 class="offeringsTitle">{{ offerings.title }}</h3>
    <p class="offeringsDescrip">{{ offerings.description }}</p>
    <div class="links">
      <a :href="offerings.website" target="_blank">Read More Here</a>
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
  display: inline-block;
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

.offeringsImage {
  display: inline;
  height: 240px;
  width: 240px;
  border: 1px solid silver;
  border-radius: 10px;
  margin-top: 12p;
}

.offeringsTitle {
  font-size: 32px;
  border-bottom: 1px solid rgba(255, 87, 34, 0.7);
  padding-top: 20px;
}

.offeringsDescrip {
  padding-top: 20px;
  height: 90px;
}

.links {
  margin-top: 10px;
}

a {
  margin-right: 10px;
}

.offeringsFrame a:hover {
  background-color: silver;
}
</style>
