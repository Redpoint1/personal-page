import { readonly, ref } from 'vue'

export type Locale = 'en' | 'sk'

const savedLanguage = localStorage.getItem('lang')
const storedLocale = savedLanguage?.replace(/^"(en|sk)"$/, '$1')
const browserLocale = navigator.language.toLowerCase().split('-')[0]
const locale = ref<Locale>(
  storedLocale === 'en' || storedLocale === 'sk'
    ? storedLocale
    : browserLocale === 'sk'
      ? 'sk'
      : 'en',
)

export function useLocale() {
  return readonly(locale)
}

export function setLocale(language: Locale) {
  locale.value = language
  localStorage.setItem('lang', language)
}

export function useTranslations<Messages extends Record<string, string>>(messages: {
  en: Messages
  sk: Record<keyof Messages, string>
}) {
  function t(key: keyof Messages): string {
    return messages[locale.value][key] ?? messages.en[key]
  }

  return { t }
}
