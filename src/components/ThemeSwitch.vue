<template>
  <v-switch
    v-model="isDarkTheme"
    :label="t('dark')"
    color="primary"
    hide-details
    density="compact"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

const theme = useTheme()

const { t } = useI18n({
  messages: {
    en: {
      dark: 'Dark',
    },
    sk: {
      dark: 'Tmavý',
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
</script>
