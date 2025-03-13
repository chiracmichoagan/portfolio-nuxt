<template>
  <div class="relative">
    <UDropdown :items="languages" :popper="{ placement: 'bottom-end' }">
      <UButton color="gray" variant="ghost" class="flex items-center gap-2">
        <span class="text-xl">{{ getCurrentFlag }}</span>
        {{ currentLanguage.name }}
      </UButton>

      <template #item="{ item }">
        <button
          class="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          @click="switchLanguage(item.code)"
        >
          <span class="text-xl">{{ item.flag }}</span>
          {{ item.name }}
        </button>
      </template>
    </UDropdown>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const languages = [
  { name: 'Français', code: 'fr', flag: '🇫🇷' },
  { name: 'English', code: 'en', flag: '🇬🇧' },
  { name: 'Italiano', code: 'it', flag: '🇮🇹' },
  { name: 'Português', code: 'pt', flag: '🇵🇹' },
  { name: 'Ελληνικά', code: 'el', flag: '🇬🇷' }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === currentLocale.value) || languages[0]
})

const getCurrentFlag = computed(() => {
  return currentLanguage.value.flag
})

const switchLanguage = (code) => {
  locale.value = code
}
</script>