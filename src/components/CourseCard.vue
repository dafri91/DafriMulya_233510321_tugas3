<script setup>
import { computed } from 'vue'

const props = defineProps({
  course: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const emit = defineEmits(['course-click'])

const levelColor = computed(() => {
  switch (props.course.level) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'Advanced':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
})

const handleCourseClick = () => {
  emit('course-click', props.course)
}
</script>

<template>
  <div
    @click="handleCourseClick"
    class="bg-white dark:bg-gray-800 rounded-sm shadow-lg hover:shadow-xl transition-all 
            duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 group"
  >
    <!-- Course Image -->
    <div class="relative overflow-hidden">
      <img
        :src="course.image"
        :alt="course.title"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-4 right-4">
        <span :class="levelColor" class="px-2 py-1 rounded-full text-xs font-medium">
          {{ course.level }}
        </span>
      </div>
    </div>

    <!-- Course Content -->
    <div class="p-6">
      <!-- Category -->
      <div class="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
        {{ course.category }}
      </div>

      <!-- Title -->
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
        {{ course.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {{ course.description }}
      </p>

      <!-- Course Stats -->
      <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {{ course.duration }}
        </div>
        <div class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          {{ course.students }}
        </div>
      </div>

      <!-- Price and Rating -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ course.price === 0 ? 'Free' : `$${course.price}` }}
          </span>
          <span v-if="course.originalPrice && course.originalPrice > course.price" class="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
            ${{ course.originalPrice }}
          </span>
        </div>
        
        <div class="flex items-center">
          <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <span class="text-sm font-medium text-gray-900 dark:text-white">{{ course.rating }}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">({{ course.reviews }})</span>
        </div>
      </div>

      <!-- Enroll Button -->
      <button class="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white 
                    font-medium py-2 px-4 rounded-sm transition-colors duration-200">
        <slot name="cta-text">Enroll Now</slot>
      </button>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;

  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>