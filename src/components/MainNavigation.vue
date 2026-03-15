<template>
  <v-app-bar density="compact" scroll-behavior="elevate" class="px-2">
    <v-btn variant="text" class="mr-2" :to="{ name: 'home' }" :prepend-icon="mdiHome">{{
      t('home')
    }}</v-btn>

    <v-btn variant="text" :to="{ name: 'projects' }" :prepend-icon="mdiGithub">{{
      t('projects')
    }}</v-btn>

    <v-spacer />

    <ThemeSwitch class="mr-3" />
    <div>
      <LanguageList />
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { mdiHome, mdiGithub } from '@mdi/js'
import LanguageList from './LanguageList.vue'
import ThemeSwitch from './ThemeSwitch.vue'

const { t } = useI18n({
  locale: 'sk',
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
