<template>
  <div class="formcontainer"> 
  <div class="max-w-lg mx-auto bg-slate-500 shadow-lg rounded-lg overflow-hidden">
    <form @submit.prevent="submitForm" ref="formRef" class="p-6">
      <div class="mb-5">
        <label for="user_name" class="text-sm text-gray-500 dark:text-black-400">Name</label>
        <input v-model="formData.user_name" type="text" id="user_name" name="user_name" class="block w-full mt-1 px-4 py-2.5 text-sm text-black-900 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:border-blue-500" required>
      </div>

      <div class="mb-5">
        <label for="user_email" class="text-sm text-gray-500 dark:text-black-400">Email</label>
        <input v-model="formData.user_email" type="email" id="user_email" name="user_email" class="block w-full mt-1 px-4 py-2.5 text-sm text-black bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:border-blue-500" required>
      </div>

      <div class="mb-5">
        <label for="message" class="text-sm text-gray-500 dark:text-gray-400">Message</label>
        <textarea v-model="formData.message" id="message" name="message" rows="4" class="block w-full mt-1 px-4 py-2.5 text-sm text-black bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-600 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:border-blue-500" required></textarea>
      </div>

      <button type="submit" :disabled="isSubmitting" class="w-full bg-red-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 ease-in-out">Send</button>

      <span v-if="isSubmitting" class="block mt-2 text-gray-600 dark:text-gray-400">Sending...</span>
    </form>
  </div>
</div>
</template>



<script>
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

export default {
  data() {
    return {
      formData: {
        user_name: '',
        user_email: '',
        message: '',
      },
      isSubmitting: false,
    };
  },
  methods: {
async submitForm(event) {
  event.preventDefault();

  const form = this.$refs.formRef;

  if (form.checkValidity()) {
    this.isSubmitting = true;

    try {
      await this.sendEmail(form);
      console.log('Email sent successfully!');
      
      // Reset the form fields
      this.formData.user_name = '';
      this.formData.user_email = '';
      this.formData.message = '';
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      this.isSubmitting = false;
    }
  } else {
    console.warn('Form is not valid');
  }
},
    sendEmail(form) {
      return emailjs
        .sendForm(serviceId, templateId, form, userId)
        .then((result) => {
          console.log('SUCCESS!', result.text);
        })
        .catch((error) => {
          console.log('FAILED...', error.text);
          throw error; // Re-throw the error for further handling
        });
    },
  },
};
</script>

<style scoped>
/* Add any additional styling or overrides here */

.formcontainer {
 margin-top: 3em; 
}

.emailform {
  width: 600px;
  padding-top: 2em;
  color: gray;
}

input,
textarea {
  color: black; /* Set the text color to white */
}

@media (max-width: 640px) {
.emailform {
 max-width: 250px;
}
}


</style>
