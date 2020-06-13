<template>
  <v-app-bar app elevate-on-scroll>
    <v-btn exact text class="mr-2" :to="{ name: 'home' }"
      ><v-icon>mdi-home</v-icon> {{ $t("home") }}</v-btn
    >

    <v-btn exact text :to="{ name: 'projects' }"
      ><v-icon>mdi-github</v-icon>{{ $t("projects") }}</v-btn
    >

    <v-spacer />

    <Language />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Language from "@/components/Language.vue";

@Component({
  components: {
    Language
  },
  i18n: {
    messages: {
      en: {
        home: "Home",
        projects: "Projects"
      },
      sk: {
        home: "Domov",
        projects: "Projekty"
      }
    }
  }
})
export default class Navigation extends Vue {}
</script>
