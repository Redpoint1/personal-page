<template>
  <v-select
    v-model="language"
    class="d-inline-flex"
    :items="languages"
    hide-details
    density="compact"
    variant="plain"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, watch } from 'vue'

const i18n = useI18n()

interface Select {
  title: string
  value: string
}

interface Languages {
  [key: string]: string
}

watch(
  () => 'i18n.locale',
  (val: string) => {
    localStorage.setItem('lang', val)
  },
)

const language = computed({
  get: () => i18n.locale.value,
  set: (value) => {
    i18n.locale.value = value
    localStorage.setItem('lang', JSON.stringify(value))
  },
})

const languages = computed(() => {
  const items: Select[] = []

  for (const lang of i18n.availableLocales) {
    items.push({
      value: lang,
      title: `${countryFlag(lang)} ${lang.toUpperCase()}`,
    })
  }

  return items
})

function countryFlag(language: string) {
  const country: Languages = {
    en: '🇬🇧',
    sk: '🇸🇰',
  }

  return country[language] ?? '🏴‍☠️' //pirate flag
}
</script>
