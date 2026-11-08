<template>
  <div class="home-page">
    <div class="planner-link">
      <a href="https://planner.rozar.eu" :aria-label="t('planner')">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path :d="mdiCalendar" /></svg>
      </a>
    </div>
    <div class="social-links">
      <a href="https://github.com/Redpoint1" :aria-label="t('github')">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path :d="mdiGithub" /></svg>
      </a>
      <a href="https://www.linkedin.com/in/richardrozar/" :aria-label="t('linkedin')">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path :d="mdiLinkedin" /></svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTranslations } from '@/plugins/i18n'
import { mdiGithub, mdiLinkedin, mdiCalendar } from '@mdi/js'

const { t } = useTranslations({
  en: {
    planner: 'Open planner',
    github: 'GitHub profile',
    linkedin: 'LinkedIn profile',
  },
  sk: {
    planner: 'Otvoriť plánovač',
    github: 'Profil na GitHube',
    linkedin: 'Profil na LinkedIne',
  },
})
</script>

<style scoped>
.home-page {
  max-width: 70rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
}

.planner-link,
.social-links {
  display: flex;
  justify-content: center;
}

.planner-link a {
  padding: 0.5rem;
}

.planner-link a,
.social-links a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.planner-link a:hover,
.social-links a:hover {
  color: var(--text);
}

.planner-link svg {
  width: 2.5rem;
  height: 2.5rem;
}

.social-links {
  min-height: min(50vh, 20rem);
  align-items: center;
  gap: 2rem;
}

.social-links a {
  display: grid;
  width: clamp(125px, 50vh, 250px);
  height: clamp(125px, 50vh, 250px);
  place-items: center;
}

.social-links svg {
  width: 100%;
  height: 100%;
}

svg {
  fill: currentColor;
}

@media (max-width: 600px) {
  .social-links {
    flex-direction: column;
  }
}
</style>
