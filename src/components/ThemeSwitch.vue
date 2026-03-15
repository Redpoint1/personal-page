<template>
  <v-btn :icon :title @click="isDarkTheme = !isDarkTheme" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js'

const theme = useTheme()

const { t } = useI18n({
  messages: {
    en: {
      switchToLight: 'Switch to Light',
      switchToDark: 'Switch to Dark',
    },
    sk: {
      switchToLight: 'Prepnúť na svetlý',
      switchToDark: 'Prepnúť na tmavý',
    },
  },
})

const isDarkTheme = computed({
  get() {
    return theme.current.value.dark
  },
  set(value) {
    theme.global.name.value = value ? 'dark' : 'light'
    localStorage.setItem('dark', JSON.stringify(value))
  },
})

const icon = computed(() => {
  return isDarkTheme.value ? mdiWeatherNight : mdiWhiteBalanceSunny
})

const title = computed(() => {
  return isDarkTheme.value ? t('switchToLight') : t('switchToDark')
})
</script>
