<template>
  <ClientOnly>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header class="p-4 bg-white dark:bg-gray-800 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">Mon Portfolio</h1>
          
          <nav class="flex items-center space-x-6">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              class="hover:text-primary-500 transition-colors"
              active-class="text-primary-500 font-semibold"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>

          <div class="flex items-center space-x-4">
            <button 
              @click="toggleDarkMode" 
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              {{ darkMode ? '🌞' : '🌙' }}
            </button>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main class="container mx-auto p-6">
        <NuxtPage />
      </main>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSelector from '~/components/LanguageSelector.vue'

const darkMode = ref(false)
const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Projets', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark', darkMode.value)
}
</script>

<style>
.router-link-active {
  color: var(--color-primary-500);
  font-weight: 600;
}
</style>
