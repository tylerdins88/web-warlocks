<template>
  <div class="about">
    <div>
      <photo-frame
        v-for="(offering, index) in offerings"
        :key="index"
        :offerings="offering"
      ></photo-frame>
    </div>
  </div>
</template>

<script>
import PhotoFrame from '../components/frames/OfferingsFrame.vue'

import Flow from '../assets/offerphotos/flowbite-logo.svg'
import Email from '../assets/offerphotos/emailJS.jpg'
import Snip from '../assets/offerphotos/snipcart.jpeg'
import Embla from '../assets/offerphotos/embla-logo.svg'
import Mongo from '../assets/offerphotos/mongodb.png'
import Express from '../assets/offerphotos/expressjs.png'
import React from '../assets/offerphotos/reactlogo.png'
import Node from '../assets/offerphotos/nodejs.png'
import SQL from '../assets/offerphotos/mysql.png'
import Tailwind from '../assets/offerphotos/tailwind.png'

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
            'One of the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS.',
          website: 'https://flowbite-vue.com/',
          image: Flow,
          alt: 'Flowbite Vue 3 Logo'
        },
        {
          title: 'EmailJS',
          description:
            'Send email directly from your code – no server side code required. Add static or dynamic attachments, dynamic parameters, captcha code and more.',
          website: 'https://www.emailjs.com/',
          image: Email,
          alt: 'EmailJS Logo'
        },
        {
          title: 'SNIPCART',
          description:
            'Snipcart is the shopping cart solution developers rely on to craft e-commerce experiences of any kind. It is a powerful, developer-first HTML/JavaScript shopping cart platform.',
          website: 'https://snipcart.com/',
          image: Snip,
          alt: 'Snipcart Logo'
        },
        {
          title: 'Embla Carousel',
          description:
            'A lightweight carousel library with fluid motion and great swipe precision.',
          website: 'https://www.embla-carousel.com/',
          image: Embla,
          alt: 'Embla Logo'
        },
        {
          title: 'MongoDB',
          description:
            'MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.',
          website: 'https://www.mongodb.com',
          image: Mongo,
          alt: 'MongoDB Logo'
        },
        {
          title: 'Express',
          description:
            'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
          website: 'https://expressjs.com',
          image: Express,
          alt: 'Express Logo'
        },
        {
          title: 'React',
          description:
            'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.',
          website: 'https://react.dev/',
          image: React,
          alt: 'React Logo'
        },
        {
          title: 'Node.js',
          description:
            'Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.',
          website: 'https://nodejs.org',
          image: Node,
          alt: 'Node Logo'
        },
        {
          title: 'MySQL',
          description:
            'MySQL is an open-source relational database management system. A structured Query Language.',
          website: 'https://www.mysql.com',
          image: SQL,
          alt: 'MySQL Logo'
        },
        {
          title: 'Tailwind',
          description:
            'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.',
          website: 'https://tailwindcss.com',
          image: Tailwind,
          alt: 'Tailwind Logo'
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
