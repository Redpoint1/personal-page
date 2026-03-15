<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="3">
        <v-autocomplete
          id="languageFilter"
          v-model="filterLanguage"
          :label="t('language')"
          :items="languages"
          hide-details
        />
      </v-col>
    </v-row>
    <v-row>
      <v-fade-transition>
        <v-col v-if="!loaded" class="text-center">
          <v-progress-circular indeterminate />
        </v-col>
      </v-fade-transition>
    </v-row>
    <v-row>
      <v-fade-transition group hide-on-leave @enter="enter">
        <v-col
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          cols="12"
          sm="6"
          :data-index="index"
          class="fade-leave-active fade-leave-to"
        >
          <ProjectCard class="fill-height" :project="project" />
        </v-col>
      </v-fade-transition>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard, { type Project } from '@/components/ProjectCard.vue'

const { t } = useI18n({
  locale: 'sk',
  messages: {
    en: {
      language: 'Language',
      all: 'All',
    },
    sk: {
      language: 'Jazyk',
      all: 'Všetko',
    },
  },
})

const projects = ref([] as Project[])
const filterLanguage = ref('')

if (!projects.value.length) {
  fetch('https://api.github.com/users/Redpoint1/repos?sort=created')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      projects.value = json
    })
}

// Computed

const filteredProjects = computed(() => {
  if (filterLanguage.value) {
    return projects.value.filter((item) => {
      return item.language === filterLanguage.value
    })
  }
  return projects.value
})

const languages = computed(() => {
  const all = { title: t('all'), value: '' }
  const languages = new Set()

  for (const project of projects.value) {
    if (project.language) {
      languages.add(project.language)
    }
  }

  const langItems = Array.from(languages).map((lang) => ({
    title: lang as string,
    value: lang as string,
  }))

  langItems.unshift(all)

  return langItems
})

const loaded = computed(() => {
  return languages.value.length !== 1
})

// Methods

function enter(el: HTMLElement, done: () => void) {
  const index = Number(el.dataset?.['index'] ?? 0)
  const delay = index * 100
  setTimeout(function () {
    el.style.opacity = '1'
    done()
  }, delay)
}
</script>

<style scoped>
.fade-leave-active {
  transition: all 0.5s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
