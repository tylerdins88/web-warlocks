<template>
  <RundownItem>
    <template #icon>
      <WizardHatIcon />
    </template>
    <template #heading>Projects</template>

    View our projects such as
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Groovana,</a>
    <a href="https://vuejs.org/" target="_blank" rel="noopener">The American Sommelier,</a>and
    <a href="https://vuejs.org/" target="_blank" rel="noopener">E-Commerce</a>here!
  </RundownItem>

  <RundownItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>What We Offer. </template>

    <div>
      we offer projects built with all of the following:

      <br />

      <a href="https://flowbite-vue.com/" target="_blank" rel="noopener">Flowbite,</a>
      <a href="https://v2.tailwindcss.com/" target="_blank" rel="noopener">Tailwind,</a>
      <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener">Axios,</a>and
      <a href="https://aws.amazon.com/" target="_blank" rel="noopener">Amazon Web Services</a>.
    </div>
  </RundownItem>

  <RundownItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Contact Us</template>

    Get in touch with us here.
  </RundownItem>

  <RundownItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Who We Are</template>

    Learn About Us Here.
  </RundownItem>
</template>

<script setup>
import RundownItem from './RundownItem.vue'

import WizardHatIcon from './icons/IconWizard.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>
