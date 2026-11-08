<template>
  <button
    type="button"
    class="theme-switch"
    :aria-label="title"
    :title="title"
    @click="toggleTheme"
  >
    <svg aria-hidden="true" viewBox="0 0 24 24"><path :d="icon" /></svg>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js'

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

const isDarkTheme = ref(document.documentElement.dataset.theme === 'dark')

function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value
  document.documentElement.dataset.theme = isDarkTheme.value ? 'dark' : 'light'
  localStorage.setItem('dark', JSON.stringify(isDarkTheme.value))
}

const icon = computed(() => {
  return isDarkTheme.value ? mdiWeatherNight : mdiWhiteBalanceSunny
})

const title = computed(() => {
  return isDarkTheme.value ? t('switchToLight') : t('switchToDark')
})
</script>

<style scoped>
.theme-switch {
  display: inline-grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border: 0;
  border-radius: 50%;
  color: inherit;
  background: transparent;
  cursor: pointer;
}

.theme-switch:hover {
  background: color-mix(in srgb, currentColor 10%, transparent);
}

svg {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
}
</style>
