import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

const savedTheme = localStorage.getItem('dark')
const isDarkTheme =
  savedTheme === null
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : savedTheme === 'true'
document.documentElement.dataset.theme = isDarkTheme ? 'dark' : 'light'

app.mount('#app')
