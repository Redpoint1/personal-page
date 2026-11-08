<template>
  <article class="project-card">
    <h2>
      <a :href="project.html_url">{{ project.name }}</a>
    </h2>
    <p>{{ project.description || t('noDescription') }}</p>
    <a v-if="project.homepage" :href="project.homepage">{{ t('homepage') }}</a>
  </article>
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

<style scoped>
.project-card {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  background: var(--surface);
}

h2 {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
}

p {
  flex: 1;
  margin: 0 0 1rem;
  color: var(--muted);
}
</style>
