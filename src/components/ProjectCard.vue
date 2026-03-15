<template>
  <v-card>
    <v-card-title
      ><a :href="project.html_url">{{ project.name }}</a></v-card-title
    >
    <v-card-subtitle>{{ project.description || t('noDescription') }}</v-card-subtitle>
    <v-card-actions>
      <v-btn v-if="project.homepage" variant="text" :href="project.homepage">{{
        t('homepage')
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

export type Project = {
  id: string
  language: string
  html_url: string
  description: string
  homepage: string
  name: string
}

const { project } = defineProps<{
  project: Project
}>()

const { t } = useI18n({
  messages: {
    en: {
      homepage: 'Homepage',
      noDescription: 'No description',
    },
    sk: {
      homepage: 'Domovská stránka',
      noDescription: 'Bez popisu',
    },
  },
})
</script>
