<script setup>
import { Icon } from '@iconify/vue'

const benefits = [
  {
    icon: 'mdi:school',
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of real-world experience and proven track records.'
  },
  {
    icon: 'mdi:rocket-launch',
    title: 'Fast-Track Learning',
    description: 'Our structured curriculum helps you master new skills quickly and efficiently with hands-on practice.'
  },
  {
    icon: 'mdi:briefcase-outline',
    title: 'Career Support',
    description: 'Get job placement assistance, resume reviews, and interview preparation to boost your career.'
  },
  {
    icon: 'mdi:star-check-outline',
    title: 'Lifetime Access',
    description: 'Once enrolled, you have lifetime access to course materials and updates. Learn at your own pace.'
  }
]
</script>

<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose OnlineCourse?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're committed to providing the best online learning experience with features designed to help you succeed.
        </p>
      </div>

      <!-- Benefit Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="bg-white dark:bg-gray-900 rounded-sm px-10 py-18 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
        >
          <div class="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
            <Icon :icon="benefit.icon" class="w-14 h-14 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ benefit.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ benefit.description }}
          </p>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-sm p-8 text-center text-white">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="text-3xl font-bold mb-2">98%</div>
            <div class="text-lg opacity-90">Course Completion Rate</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">24/7</div>
            <div class="text-lg opacity-90">Student Support</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">30 Days</div>
            <div class="text-lg opacity-90">Money Back Guarantee</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
