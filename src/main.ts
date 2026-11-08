import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/plugins/i18n'

const app = createApp(App)

const savedTheme = localStorage.getItem('dark')
const isDarkTheme =
  savedTheme === null
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : savedTheme === 'true'
document.documentElement.dataset.theme = isDarkTheme ? 'dark' : 'light'

app.use(router).use(i18n).mount('#app')
