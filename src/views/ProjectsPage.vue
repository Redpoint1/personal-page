<template>
  <section class="projects-page">
    <div class="filter-row" role="group" :aria-label="t('language')">
      <span class="filter-label">{{ t('language') }}</span>
      <div class="filter-chips">
        <button
          v-for="language in languages"
          :key="language.value"
          type="button"
          class="filter-chip"
          :aria-pressed="filterLanguage === language.value"
          @click="filterLanguage = filterLanguage === language.value ? '' : language.value"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24"><path :d="language.icon" /></svg>
          {{ language.title }}
        </button>
      </div>
    </div>
    <div v-if="!loaded" class="loading" role="status" :aria-label="t('loading')">
      <span class="spinner" />
    </div>
    <TransitionGroup name="project" tag="div" class="project-grid" @enter="enter" @leave="leave">
      <div
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :data-index="index"
        class="project-grid-item"
      >
        <ProjectCard :project="project" />
      </div>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslations } from '@/plugins/i18n'
import {
  mdiCodeTags,
  mdiConsole,
  mdiLanguageC,
  mdiLanguageCpp,
  mdiLanguageCsharp,
  mdiLanguageCss3,
  mdiLanguageGo,
  mdiLanguageHtml5,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLanguageKotlin,
  mdiLanguagePhp,
  mdiLanguagePython,
  mdiLanguageRuby,
  mdiLanguageRust,
  mdiLanguageSwift,
  mdiLanguageTypescript,
  mdiVuejs,
} from '@mdi/js'
import ProjectCard, { type Project } from '@/components/ProjectCard.vue'

const languageIcons = new Map([
  ['C', mdiLanguageC],
  ['C++', mdiLanguageCpp],
  ['C#', mdiLanguageCsharp],
  ['CSS', mdiLanguageCss3],
  ['Go', mdiLanguageGo],
  ['HTML', mdiLanguageHtml5],
  ['Java', mdiLanguageJava],
  ['JavaScript', mdiLanguageJavascript],
  ['Kotlin', mdiLanguageKotlin],
  ['PHP', mdiLanguagePhp],
  ['Python', mdiLanguagePython],
  ['Ruby', mdiLanguageRuby],
  ['Rust', mdiLanguageRust],
  ['Shell', mdiConsole],
  ['Swift', mdiLanguageSwift],
  ['TypeScript', mdiLanguageTypescript],
  ['Vue', mdiVuejs],
])

const { t } = useTranslations({
  en: {
    language: 'Language',
    loading: 'Loading projects',
  },
  sk: {
    language: 'Jazyk',
    loading: 'Načítavajú sa projekty',
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
  const projectLanguages = new Set<string>()

  for (const project of projects.value) {
    if (project.language) {
      projectLanguages.add(project.language)
    }
  }

  return Array.from(projectLanguages).map((lang) => ({
    title: lang,
    value: lang,
    icon: languageIcons.get(lang) ?? mdiCodeTags,
  }))
})

const loaded = computed(() => {
  return languages.value.length !== 0
})

// Methods

function enter(el: Element, done: () => void) {
  const index = Number(el.getAttribute('data-index') ?? 0)
  const delay = index * 100
  setTimeout(function () {
    done()
  }, delay)
}

function leave(el: Element, done: () => void) {
  el.addEventListener('transitionend', done, { once: true })
}
</script>

<style scoped>
.projects-page {
  max-width: 70rem;
  margin: 0 auto;
  padding: 1rem;
}

.filter-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filter-label {
  color: var(--muted);
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.filter-chip {
  display: inline-flex;
  min-height: 2rem;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.65rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  color: var(--text);
  background: var(--surface);
  cursor: pointer;
  font-size: 0.875rem;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.filter-chip svg {
  width: 1rem;
  height: 1rem;
  flex: none;
  fill: currentColor;
}

.filter-chip:hover {
  background: color-mix(in srgb, var(--text) 10%, var(--surface));
}

.filter-chip[aria-pressed='true'] {
  border-color: var(--link);
  background: color-mix(in srgb, var(--link) 18%, var(--surface));
}

.filter-chip:focus-visible {
  outline: 2px solid var(--link);
  outline-offset: 2px;
}

.loading {
  display: flex;
  min-height: 5rem;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--border);
  border-top-color: var(--link);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.project-grid-item {
  min-width: 0;
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.project-enter-from,
.project-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

.project-leave-active {
  position: absolute;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
