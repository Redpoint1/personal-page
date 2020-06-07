<template>
  <v-app>
    <Navigation />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

import "@mdi/font/css/materialdesignicons.min.css";
import "typeface-roboto";

@Component({
  components: {
    Navigation,
    Footer
  }
})
export default class App extends Vue {}
</script>
