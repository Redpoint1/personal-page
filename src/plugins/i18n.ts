import { createI18n } from 'vue-i18n'

const savedLanguage = localStorage.getItem('lang')
const storedLocale = savedLanguage?.replace(/^"(en|sk)"$/, '$1')
const browserLocale = navigator.language.toLowerCase().split('-')[0]
const locale =
  storedLocale === 'en' || storedLocale === 'sk'
    ? storedLocale
    : browserLocale === 'sk'
      ? 'sk'
      : 'en'

const i18n = createI18n({
  locale,
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    en: { languageSelect: 'Language' },
    sk: { languageSelect: 'Jazyk' },
  },
})

export default i18n
