<template>
  <v-app>
    <MainNavigation />
    <v-main>
      <router-view v-slot="{ Component }">
        <v-fade-transition mode="out-in">
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
    <MainFooter />
  </v-app>
</template>

<script setup lang="ts">
import MainNavigation from '@/components/MainNavigation.vue'
import MainFooter from '@/components/MainFooter.vue'

import '@mdi/font/css/materialdesignicons.min.css'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
</script>

<style>
html,
body {
  overflow-y: auto;
}
</style>
