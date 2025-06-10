<script setup>
import { Icon } from '@iconify/vue'
const emit = defineEmits(['cta-click', 'secondary-cta-click'])

const handlePrimaryCTA = () => {
  emit('cta-click', 'start-learning')
}

const handleSecondaryCTA = () => {
  emit('secondary-cta-click', 'view-courses')
}
</script>

<template>
  <section
    class="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 opacity-50"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        <!-- Content -->
        <div class="lg:col-span-6">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Learn Anything,
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                Fast!
              </span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Master new skills with our expert-led courses. From web development to data science,
              we have everything you need to advance your career.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button @click="handlePrimaryCTA" class="btn-primary text-lg px-8 py-4">
                Start Learning
                <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </button>

              <button @click="handleSecondaryCTA"
                class="btn-outline text-lg px-8 py-4 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900">
                View Courses
              </button>
            </div>

            <!-- Stats -->
            <div class="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div class="text-2xl lg:text-3xl font-bold text-primary-600 dark:text-primary-400">10K+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Students</div>
              </div>
              <div>
                <div class="text-2xl lg:text-3xl font-bold text-primary-600 dark:text-primary-400">500+</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Courses</div>
              </div>
              <div>
                <div class="text-2xl lg:text-3xl font-bold text-primary-600 dark:text-primary-400">95%</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Illustration -->
        <div class="mt-12 lg:mt-0 lg:col-span-6">
          <div class="relative">
            <!-- Placeholder for hero image/illustration -->
            <div class="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl p-0 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Online Learning Illustration" class="w-full h-64 lg:h-80 object-cover rounded-lg" />
            </div>

            <!-- Floating Cards -->
            <div
              class="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 rotate-3 hidden lg:flex items-center space-x-2">
              <Icon icon="mdi:book-open-page-variant" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <div>
                <div class="text-sm font-semibold text-gray-900 dark:text-white">New Course</div>
                <div class="text-xs text-gray-600 dark:text-gray-400">JavaScript Basics</div>
              </div>
            </div>

            <div
              class="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 -rotate-3 hidden lg:flex items-center space-x-2">
              <Icon icon="mdi:star" class="w-5 h-5 text-yellow-400" />
              <div>
                <div class="text-sm font-semibold text-gray-900 dark:text-white">4.9/5</div>
                <div class="text-xs text-gray-600 dark:text-gray-400">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>