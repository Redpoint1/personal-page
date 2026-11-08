<template>
  <div class="language-switch" role="group" :aria-label="t('languageSelect')">
    <button
      v-for="language in languages"
      :key="language.code"
      type="button"
      :lang="language.code"
      :aria-label="language.name"
      :aria-pressed="locale === language.code"
      @click="setLanguage(language.code)"
    >
      <span aria-hidden="true">{{ language.flag }}</span>
      {{ language.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({ useScope: 'global' })

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
]

function setLanguage(language: string) {
  locale.value = language
  localStorage.setItem('lang', language)
}
</script>

<style scoped>
.language-switch {
  display: inline-flex;
  flex-shrink: 0;
  padding: 2px;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
}

button {
  min-width: 2.5rem;
  min-height: 2.25rem;
  padding: 0 0.4rem;
  border: 0;
  border-radius: 0.25rem;
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  font-size: 0.875rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

button:hover {
  color: var(--text);
}

button[aria-pressed='true'] {
  color: var(--text);
  background: color-mix(in srgb, currentColor 12%, transparent);
  font-weight: 700;
}

button:focus-visible {
  outline: 2px solid var(--link);
  outline-offset: -2px;
}
</style>
