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
</script>

<style>
html,
body {
  overflow-y: auto;
}
</style>
