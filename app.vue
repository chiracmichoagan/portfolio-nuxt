<template>
  <ClientOnly>
    <div
      class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
    >
      <header class="p-4 bg-white dark:bg-gray-800 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold">Txr Portfolio</NuxtLink>

          <!-- Navigation  -->
          <nav class="flex items-center space-x-6 relative">
            <!-- Menu desktop (affiché uniquement sur les écrans larges) -->
            <div class="hidden md:flex items-center space-x-6">
              <NuxtLink
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                class="hover:text-primary-500 transition-colors flex items-center gap-2"
                active-class="text-primary-500 font-semibold"
              >
                <UIcon v-if="item.icon" :name="item.icon" class="text-lg" />
                {{ item.label }}
              </NuxtLink>
            </div>
            <!-- Icône de menu  ( uniquement sur mobile) -->
            <div @click="toggleMenu" class="md:hidden cursor-pointer mt-2">
              <UIcon name="i-heroicons-bars-3" class="text-2xl" />
            </div>

            <!-- Menu mobile déroulant -->
            <div 
              v-show="isMenuOpen" 
              class="absolute top-12 right-0 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col space-y-4 md:hidden transition-all duration-300 ease-in-out z-50 w-48"
            >
              <NuxtLink 
                v-for="item in navItems" 
                :key="item.to"
                :to="item.to"
                class="hover:text-primary-500 transition-colors flex items-center gap-2"
                active-class="text-primary-500 font-semibold"
                @click="closeMenu"
              >
                <UIcon v-if="item.icon" :name="item.icon" class="text-lg" />
                {{ item.label }}
              </NuxtLink>
            </div>
          </nav>

          <div class="flex items-center space-x-4">
            <button
              @click="toggleDarkMode"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex items-center justify-center"
            >
              <UIcon
                :name="darkMode ? 'i-heroicons-sun' : 'i-heroicons-moon'"
                class="text-xl"
              />
            </button>
            <button
              @click="toggleTerminal"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex items-center"
              :class="{ 'bg-primary-100 dark:bg-primary-900': showTerminal }"
            >
              <UIcon name="i-heroicons-command-line" class="text-xl" />
            </button>
            <!-- <LanguageSelector /> -->
          </div>
        </div>
      </header>

      <main class="container mx-auto p-6">
        <NuxtPage />
      </main>
      <!-- Terminal flottant -->
      <div
        v-if="showTerminal"
        class="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 shadow-lg transition-all duration-300"
        :class="{ 'h-96': showTerminal, 'h-0': !showTerminal }"
      >
        <div class="container mx-auto p-4 h-full">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-white font-semibold">Terminal Interactif</h3>
            <button
              @click="toggleTerminal"
              class="text-white hover:text-primary-500"
            >
              <UIcon name="i-heroicons-x-mark" class="text-xl" />
            </button>
          </div>
          <TerminalExperience v-if="showTerminal" class="h-[calc(100%-2rem)]" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref } from "vue";
import LanguageSelector from "~/components/LanguageSelector.vue";

const darkMode = ref(false);
const showTerminal = ref(false);
const isMenuOpen = ref(false);
const navItems = [
  { label: "Accueil", to: "/", icon: "simple-icons:homeadvisor" },
  { label: "À propos", to: "/about", icon: "simple-icons:aboutdotme" },
  { label: "Projets", to: "/projects", icon: "simple-icons:github" },
  { label: "Contact", to: "/contact", icon: "simple-icons:maildotru" },
];

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
};
const toggleTerminal = () => {
  showTerminal.value = !showTerminal.value;
};
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style>
.router-link-active {
  color: var(--color-primary-500);
  font-weight: 600;
}
</style>
