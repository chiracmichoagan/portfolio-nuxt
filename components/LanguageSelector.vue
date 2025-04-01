<template>
  <div class="relative">
    <UDropdown>
      <UButton color="gray" variant="ghost" class="flex items-center gap-2">
        <span class="text-xl">{{ getCurrentFlag }}</span>
        {{ currentLanguage.name }}
      </UButton>

      <template #content>
        <UDropdownItems>
          <UDropdownItem
            v-for="lang in languages"
            :key="lang.code"
            @click="switchLanguage(lang.code)"
          >
            <div class="flex items-center gap-2">
              <span class="text-xl">{{ lang.flag }}</span>
              {{ lang.name }}
            </div>
          </UDropdownItem>
        </UDropdownItems>
      </template>
    </UDropdown>
  </div>
</template>

<script setup>
import { computed } from "vue";
const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const languages = [
  { name: "Français", code: "fr", flag: "🇫🇷" },
  { name: "English", code: "en", flag: "🇬🇧" },
  { name: "Italiano", code: "it", flag: "🇮🇹" },
  { name: "Português", code: "pt", flag: "🇵🇹" },
  { name: "Ελληνικά", code: "el", flag: "🇬🇷" },
];

const currentLanguage = computed(() => {
  return (
    languages.find((lang) => lang.code === currentLocale.value) || languages[0]
  );
});

const getCurrentFlag = computed(() => {
  return currentLanguage.value.flag;
});

const switchLanguage = (code) => {
  locale.value = code;
};
</script>
