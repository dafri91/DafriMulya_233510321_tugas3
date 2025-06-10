<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    return
  }

  isSubmitting.value = true

  // Simulate API call
  setTimeout(() => {
    showSuccess.value = true
    isSubmitting.value = false

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  }, 1000)
}

const contactInfo = [
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    title: 'Phone',
    detail: '+1 (555) 123-4567',
    subdetal: 'Mon-Fri 9am-6pm EST'
  },
  {
    icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email',
    detail: 'support@onlinecourse.com',
    subdetal: 'We reply within 24 hours'
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Office',
    detail: '123 Learning Street',
    subdetal: 'San Francisco, CA 94102'
  }
]

const faq = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Simply browse our course catalog, click on the course you\'re interested in, and follow the enrollment process. You can pay securely online and start learning immediately.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all our courses. If you\'re not satisfied, contact our support team for a full refund.'
  },
  {
    question: 'Can I access courses on mobile devices?',
    answer: 'Absolutely! Our platform is fully responsive and works great on all devices including smartphones and tablets.'
  },
  {
    question: 'Do you provide certificates?',
    answer: 'Yes, upon successful completion of a course, you\'ll receive a certificate of completion that you can share on LinkedIn and add to your resume.'
  }
]
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">

      <!-- Contact Info Card -->
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-900  dark:text-white">Get in Touch</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out through the form or use the contact info below.
        </p>

        <div v-for="info in contactInfo" :key="info.title"
          class="bg-white/80 dark:bg-gray-800/60 backdrop-blur rounded-2xl p-6 shadow-md flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
            <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ info.title }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ info.detail }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ info.subdetal }}</p>
          </div>
        </div>
      </div>

      <!-- Form + FAQ Section -->
      <div class="space-y-12">
        <!-- Contact Form -->
        <div class="bg-white/90 dark:bg-gray-800/70 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input v-model="form.name" required type="text" placeholder="Full Name" class="form-input" />
              <input v-model="form.email" required type="email" placeholder="Email" class="form-input" />
            </div>
            <input v-model="form.subject" type="text" placeholder="Subject" class="form-input" />
            <textarea v-model="form.message" required rows="5" placeholder="Your message..."
              class="form-input resize-none"></textarea>

            <button type="submit"
              class="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition">
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex justify-center items-center">
                <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5 0 0 5 0 12h4z" />
                </svg>
                Sending...
              </span>
            </button>
          </form>
        </div>

      
        <!-- FAQ Section -->
        <div class="flex justify-center text-center">
          <div class="space-y-4 w-full max-w-2xl text-center">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">FAQ</h3>
            <div v-for="item in faq" :key="item.question"
              class="bg-white/80 dark:bg-gray-800/60 backdrop-blur rounded-lg p-4 shadow-sm text-left">
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ item.question }}</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">{{ item.answer }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
