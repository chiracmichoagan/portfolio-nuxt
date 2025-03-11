<script setup>
import { ref } from 'vue'

const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark', darkMode.value)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
    <header class="p-4 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
      <h1 class="text-xl font-bold">Mon Portfolio</h1>
      <nav>
        <NuxtLink to="/" class="mr-4">Accueil</NuxtLink>
        <NuxtLink to="/about" class="mr-4">À propos</NuxtLink>
        <NuxtLink to="/projects" class="mr-4">Projets</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
      <button @click="toggleDarkMode" class="ml-4 p-2 bg-gray-300 dark:bg-gray-700 rounded">
        {{ darkMode ? '🌞' : '🌙' }}
      </button>
    </header>
    <main class="container mx-auto p-6">
      <NuxtPage />
    </main>
  </div>
</template>
