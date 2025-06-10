<script setup>
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const categories = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'UI/UX Design',
  'Digital Marketing'
]

const socialLinks = [
  {
    name: 'Twitter',
    icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
  },
  {
    name: 'LinkedIn',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z'
  },
  {
    name: 'YouTube',
    icon: 'M22.46 6s-.2-1.44-.82-2.07C20.86 3.16 20 3.16 19.64 3.12 16.36 2.9 12 2.9 12 2.9s-4.36 0-7.64.22c-.36.04-1.22.04-2 .81C1.74 4.56 1.54 6 1.54 6S1.3 7.84 1.3 9.69v1.73c0 1.85.24 3.69.24 3.69s.2 1.44.82 2.07c.78.77 1.8.75 2.26.83C7.5 18.09 12 18.1 12 18.1s4.36-.01 7.64-.23c.36-.04 1.22-.04 2-.81.62-.63.82-2.07.82-2.07s.24-1.84.24-3.69v-1.73c0-1.85-.24-3.69-.24-3.69zM9.75 13.5v-6l5.75 3-5.75 3z'
  }
]
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">OC</span>
            </div>
            <span class="text-xl font-bold">OnlineCourse</span>
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Empowering learners worldwide with high-quality online courses and expert instruction. Start your learning journey today.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              href="#"
              class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </router-link>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Popular Categories</h3>
          <ul class="space-y-3">
            <li v-for="category in categories" :key="category">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                {{ category }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact & Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Stay Updated</h3>
          <p class="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest courses and updates.
          </p>
          <div class="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              class="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
          
          <!-- Contact Info -->
          <div class="mt-6 space-y-2">
            <div class="flex items-center text-gray-400">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              support@onlinecourse.com
            </div>
            <div class="flex items-center text-gray-400">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +1 (555) 123-4567
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm">
            © 2025 OnlineCourse. All rights reserved.
          </div>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>