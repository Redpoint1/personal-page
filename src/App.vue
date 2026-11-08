<template>
  <div class="app-shell">
    <MainNavigation />
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainNavigation from '@/components/MainNavigation.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<style>
:root {
  color-scheme: light;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
  background: #fff;
  --surface: #fff;
  --text: #222;
  --muted: #666;
  --border: #ddd;
  --link: #1867c0;
}

:root[data-theme='dark'] {
  color-scheme: dark;
  color: #fff;
  background: #121212;
  --surface: #1e1e1e;
  --text: #fff;
  --muted: #bbb;
  --border: #444;
  --link: #90caf9;
}

html,
body {
  min-width: 320px;
  min-height: 100%;
  margin: 0;
  overflow-y: auto;
}

body {
  color: var(--text);
  background: var(--surface);
}

button,
select {
  font: inherit;
}

a {
  color: var(--link);
}

.app-shell {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
