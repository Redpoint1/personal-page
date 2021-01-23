<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

import "@mdi/font/css/materialdesignicons.min.css";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

@Component({
  components: {
    Navigation,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
html,
body {
  overflow-y: auto;
}
</style>
