<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  testimonials: {
    type: Array,
    default: () => []
  }
})

const currentSlide = ref(0)
let intervalId = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.testimonials.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? props.testimonials.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoSlide = () => {
  intervalId = setInterval(nextSlide, 5000)
}

const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  if (props.testimonials.length > 1) {
    startAutoSlide()
  }
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<template>
  <section class="py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What Our Students Say
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join thousands of successful students who have transformed their careers with our courses.
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative max-w-4xl mx-auto" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
        <div class="overflow-hidden rounded-2xl">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="w-full flex-shrink-0"
            >
              <div class="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 text-center">
                <!-- Quote Icon -->
                <div class="text-primary-600 dark:text-primary-400 mb-6">
                  <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <!-- Testimonial Text -->
                <blockquote class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "{{ testimonial.content }}"
                </blockquote>

                <!-- Author Info -->
                <div class="flex items-center justify-center">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                    class="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div class="text-left">
                    <div class="font-semibold text-gray-900 dark:text-white">{{ testimonial.name }}</div>
                    <div class="text-gray-600 dark:text-gray-400">{{ testimonial.role }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-500">{{ testimonial.company }}</div>
                  </div>
                </div>

                <!-- Rating -->
                <div class="flex justify-center mt-4">
                  <div class="flex space-x-1">
                    <svg
                      v-for="star in 5"
                      :key="star"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          v-if="testimonials.length > 1"
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          v-if="testimonials.length > 1"
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <!-- Dots Indicator -->
      <div v-if="testimonials.length > 1" class="flex justify-center mt-8 space-x-2">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-200"
          :class="index === currentSlide ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'"
        ></button>
      </div>
    </div>
  </section>
</template>