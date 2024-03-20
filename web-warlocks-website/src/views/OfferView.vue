<template>
  <div class="about">
    <div>
      <photo-frame :offerings="offerings[0]" v-if="offerings.length > 0"></photo-frame>
    </div>
  </div>
</template>

<script>
import PhotoFrame from '../components/frames/OfferingsFrame.vue'

import Flow from '../assets/offerphotos/flowbite-vue.png'

export default {
  components: {
    PhotoFrame
  },
  data() {
    return {
      offerings: [
        {
          title: 'Flowbite Vue 3',
          description:
            'One of the most popular open-source library of interactive UI components built with the utility clases from Tailwind CSS.',
          website: 'https://flowbite-vue.com/',
          image: Flow
        }
      ]
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
