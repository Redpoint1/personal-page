<template>
  <v-footer app absolute padless color="white">
    <v-col cols="12" sm="4" align-self="center" class="text-center text-sm-left"
      ><v-btn text :href="bugUrl" color="grey"
        ><v-icon left>mdi-bug</v-icon>{{ $t("reportABug") }}</v-btn
      ></v-col
    >
    <v-col cols="12" sm="4" align-self="center" class="text-center grey--text"
      >{{ $t("copyright") }} &copy; {{ copyright }} <b>{{ author }}</b></v-col
    >
    <v-col
      cols="12"
      sm="4"
      align-self="center"
      class="text-center text-sm-right grey--text"
      >{{ version }}</v-col
    >
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  get author() {
    return process.env.VUE_APP_AUTHOR;
  }

  get copyright() {
    return process.env.VUE_APP_COPYRIGHT;
  }

  get version() {
    return process.env.VUE_APP_VERSION;
  }

  get bugUrl() {
    return process.env.VUE_APP_BUG_REPORT;
  }
}
</script>
