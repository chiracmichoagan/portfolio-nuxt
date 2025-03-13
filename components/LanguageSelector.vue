<template>
  <div class="relative">
    <UDropdown :items="languages" :popper="{ placement: 'bottom-end' }">
      <UButton color="gray" variant="ghost" class="flex items-center gap-2">
        <span class="flag-icon" v-html="getFlagEmoji(currentLocale)"></span>
        {{ currentLanguage.name }}
      </UButton>

      <template #item="{ item }">
        <button
          class="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          @click="switchLanguage(item.code)"
        >
          <span class="flag-icon" v-html="getFlagEmoji(item.code)"></span>
          {{ item.name }}
        </button>
      </template>
    </UDropdown>
  </div>
</template>

<script setup>
import { getFlag } from 'country-flag-icons/unicode'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const languages = [
  { name: 'Français', code: 'fr', country: 'FR' },
  { name: 'English', code: 'en', country: 'GB' },
  { name: 'Italiano', code: 'it', country: 'IT' },
  { name: 'Português', code: 'pt', country: 'PT' },
  { name: 'Ελληνικά', code: 'el', country: 'GR' }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === currentLocale.value)
})

const getFlagEmoji = (code) => {
  const country = languages.find(lang => lang.code === code)?.country
  return country ? getFlag(country) : ''
}

const switchLanguage = (code) => {
  locale.value = code
}
</script>

<style scoped>
.flag-icon {
  font-size: 1.2em;
  line-height: 1;
}
</style>