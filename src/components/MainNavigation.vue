<template>
  <header class="site-header">
    <nav class="site-navigation" :aria-label="t('navigation')">
      <RouterLink class="navigation-link" :to="{ name: 'home' }">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path :d="mdiHome" /></svg>
        <span>{{ t('home') }}</span>
      </RouterLink>
      <RouterLink class="navigation-link" :to="{ name: 'projects' }">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path :d="mdiGithub" /></svg>
        <span>{{ t('projects') }}</span>
      </RouterLink>
      <div class="navigation-spacer" />
      <ThemeSwitch />
      <LanguageList />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useTranslations } from '@/plugins/i18n'
import { mdiHome, mdiGithub } from '@mdi/js'
import LanguageList from './LanguageList.vue'
import ThemeSwitch from './ThemeSwitch.vue'

const { t } = useTranslations({
  en: {
    navigation: 'Main navigation',
    home: 'Home',
    projects: 'Projects',
  },
  sk: {
    navigation: 'Hlavná navigácia',
    home: 'Domov',
    projects: 'Projekty',
  },
})
</script>

<style scoped>
.site-header {
  position: sticky;
  z-index: 1;
  top: 0;
  background: var(--surface);
}

.site-navigation {
  display: flex;
  width: 100%;
  min-height: 3.5rem;
  max-width: 72rem;
  box-sizing: border-box;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.navigation-link {
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  gap: 0.4rem;
  padding: 0 0.65rem;
  border-radius: 0.25rem;
  color: inherit;
  text-decoration: none;
}

.navigation-link:hover,
.navigation-link.router-link-active {
  background: color-mix(in srgb, currentColor 10%, transparent);
}

.navigation-link svg {
  width: 1.25rem;
  height: 1.25rem;
  fill: currentColor;
}

.navigation-spacer {
  flex: 1;
}

@media (max-width: 600px) {
  .site-navigation {
    gap: 0.25rem;
    padding: 0 0.5rem;
  }

  .navigation-link span {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
}
</style>
