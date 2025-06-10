import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // Dark mode state
  const isDarkMode = ref(false)
  
  // User state (mock)
  const user = ref(null)
  const isLoggedIn = computed(() => user.value !== null)
  
  // Mobile menu state
  const isMobileMenuOpen = ref(false)
  
  // Newsletter subscription state
  const newsletterEmail = ref('')
  const isSubscribed = ref(false)

  // Dark mode methods
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    if (typeof window !== 'undefined') {
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
      }
    }
  }

  const initializeDarkMode = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      isDarkMode.value = stored ? stored === 'true' : prefersDark
      
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  // User methods (mock)
  const login = (userData) => {
    user.value = userData
  }

  const logout = () => {
    user.value = null
  }

  // Mobile menu methods
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  // Newsletter methods
  const subscribeNewsletter = (email) => {
    newsletterEmail.value = email
    isSubscribed.value = true
  }

  return {
    // State
    isDarkMode,
    user,
    isLoggedIn,
    isMobileMenuOpen,
    newsletterEmail,
    isSubscribed,
    
    // Methods
    toggleDarkMode,
    initializeDarkMode,
    login,
    logout,
    toggleMobileMenu,
    closeMobileMenu,
    subscribeNewsletter
  }
})