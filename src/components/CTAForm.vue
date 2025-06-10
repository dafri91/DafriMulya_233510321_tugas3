<script setup>
import { ref } from 'vue'
import { useAppStore } from '../store'

const emit = defineEmits(['form-submit'])

const appStore = useAppStore()
const name = ref('')
const email = ref('')
const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  if (!name.value.trim() || !email.value.trim()) {
    return
  }
  isSubmitting.value = true

  // Simulate API call
  setTimeout(() => {
    appStore.subscribeNewsletter(email.value)
    emit('form-submit', {
      name: name.value,
      email: email.value
    })
    showSuccess.value = true
    isSubmitting.value = false
    // Reset form
    name.value = ''
    email.value = ''
    // Hide success message after 3 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }, 1000)
}
</script>

<template>
  <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-500">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-10">
        <!-- Form -->
        <div class="bg-white dark:bg-gray-900 rounded-sm p-10 shadow-2xl w-full lg:w-2/3 xl:max-w-xl">
          <form @submit.prevent="handleSubmit" class="space-y-6 text-lg">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input id="name" v-model="name" type="text" required placeholder="Enter your full name"
                class="w-full px-5 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200" />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input id="email" v-model="email" type="email" required placeholder="Enter your email address"
                class="w-full px-5 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200" />
            </div>

            <button type="submit" :disabled="isSubmitting || !name.trim() || !email.trim()"
              class="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600 text-white font-semibold py-4 px-6 text-lg rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 disabled:transform-none">
              <span v-if="!isSubmitting">Join Now - It's Free!</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Processing...
              </span>
            </button>

            <p class="text-xs text-gray-500 dark:text-gray-400 mt-4">
              <slot name="disclaimer">
                By signing up, you agree to our Terms of Service and Privacy Policy.
                No spam, unsubscribe at any time.
              </slot>
            </p>
          </form>
        </div>

        <!-- Header -->
        <div class="text-center lg:text-left lg:w-1/3">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p class="text-lg text-white opacity-90 mb-6">
            Join thousands of students already learning with us. Get started today and unlock your potential!
          </p>

          <!-- Success Message -->
          <transition name="fade">
            <div v-if="showSuccess" class="bg-green-500 text-white p-6 rounded-lg">
              Thank you! We'll be in touch soon.
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
