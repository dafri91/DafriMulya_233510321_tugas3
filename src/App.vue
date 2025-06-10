<!-- src/App.vue -->
<script setup>
import { onMounted } from 'vue'
import { useAppStore } from './store'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const appStore = useAppStore()

const handleLoginClick = () => {
  alert(`You have clicked the button: Login`)
}

onMounted(() => {
  appStore.initializeDarkMode()
})
</script>

<template>
  <div id="app" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

    <Navbar @login-click="handleLoginClick" />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>
