<template>
  <v-app-bar app elevate-on-scroll>
    <v-btn exact text class="mr-2" :to="{ name: 'home' }"
      ><v-icon>mdi-home</v-icon> {{ $t("home") }}</v-btn
    >

    <v-btn exact text :to="{ name: 'projects' }"
      ><v-icon>mdi-github</v-icon>{{ $t("projects") }}</v-btn
    >

    <v-spacer />

    <Theme class="mr-2" />
    <div class="language"><Language /></div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Language from "./Language.vue";
import Theme from "./Theme.vue";

@Component({
  components: {
    Language,
    Theme,
  },
  i18n: {
    messages: {
      en: {
        home: "Home",
        projects: "Projects",
      },
      sk: {
        home: "Domov",
        projects: "Projekty",
      },
    },
  },
})
export default class Navigation extends Vue {}
</script>

<style lang="scss" scoped>
@use "sass:map";
@import "vuetify/src/styles/styles.sass";

.language {
  width: 80px;
  padding-left: 6px;
  transition: background-color 0.5s;
  border-radius: 4px;
}

header.theme--light .language:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

header.theme--dark .language:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

header.theme--light.v-app-bar.v-toolbar {
  background-color: map.get($material-light, "background");
}

header.theme--dark.v-app-bar.v-toolbar {
  background-color: map.get($material-dark, "background");
}
</style>
