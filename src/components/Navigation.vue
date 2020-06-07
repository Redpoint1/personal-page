<template>
  <v-app-bar app elevate-on-scroll color="white">
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
  }
})
export default class Navigation extends Vue {}
</script>
