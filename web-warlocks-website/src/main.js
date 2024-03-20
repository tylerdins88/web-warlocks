import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite/dist/flowbite.css' // Adjust the path accordingly
// Import necessary FontAwesome components and icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

// Add the FontAwesome icons to the library
library.add(faHatWizard)

const app = createApp(App)

// Register the FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
