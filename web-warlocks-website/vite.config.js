// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueJsx(),
//     {
//       dotenv: {
//         ignoreLocal: true
//       }
//     }
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//       flowbite: 'flowbite' // Adjust the alias to point directly to Flowbite
//     }
//   }
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    {
      dotenv: {
        ignoreLocal: true
      }
    }
  ],
  resolve: {
    alias: {
      '@': '/src' // Set the alias directly to the relative path
    }
  }
})
