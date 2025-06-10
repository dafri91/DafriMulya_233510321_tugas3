<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '../store'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

const emit = defineEmits(['login-click'])

const handleLoginClick = () => {
  emit('login-click')
  appStore.closeMobileMenu()
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const isActiveRoute = computed(() => (path) => {
  return route.path === path
})


</script>

<template>
  <nav class="bg-gradient-to-br from-primary-50 to-secondary-50 dark:bg-gray-900 sticky top-0 z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-sm flex items-center justify-center">
              <span class="text-white font-bold text-basic">OC</span>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-black">OnlineCourse</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link v-for="link in navLinks" :key="link.name" :to="link.path"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-sm text-basic font-medium transition-colors duration-200"
              :class="{ 'text-primary-600 dark:text-primary-400 font-semibold': isActiveRoute(link.path) }">
              {{ link.name }}
            </router-link>
          </div>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center space-x-4">
        

          <!-- Login Button -->
          <button @click="handleLoginClick"
            class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
            Login
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          

          <!-- Hamburger Menu -->
          <button @click="appStore.toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!appStore.isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-up">
      <div v-show="appStore.isMobileMenuOpen"
        class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link v-for="link in navLinks" :key="link.name" :to="link.path" @click="appStore.closeMobileMenu"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block px-3 py-2 rounded-sm text-base font-medium transition-colors duration-200"
            :class="{ 'text-primary-600 dark:text-primary-400 font-semibold': isActiveRoute(link.path) }">
            {{ link.name }}
          </router-link>
          <button @click="handleLoginClick"
            class="w-full text-left bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4">
            Login
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>