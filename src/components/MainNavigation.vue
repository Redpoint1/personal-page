<template>
  <v-app-bar density="compact" scroll-behavior="elevate" class="px-2">
    <v-btn exact text class="mr-2" :to="{ name: 'home' }"
      ><v-icon>mdi-home</v-icon> {{ t('home') }}</v-btn
    >

    <v-btn exact text :to="{ name: 'projects' }"
      ><v-icon>mdi-github</v-icon>{{ t('projects') }}</v-btn
    >

    <v-spacer />

    <ThemeSwitch class="mr-3" />
    <div>
      <LanguageList />
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageList from './LanguageList.vue'
import ThemeSwitch from './ThemeSwitch.vue'

const { t } = useI18n({
  locale: 'sk',
  fallbackLocale: 'en',
  messages: {
    en: {
      home: 'Home',
      projects: 'Projects',
    },
    sk: {
      home: 'Domov',
      projects: 'Projekty',
    },
  },
})
</script>

<style scoped>
.v-theme--dark.v-app-bar.v-toolbar {
  background-color: transparent;
}
</style>
