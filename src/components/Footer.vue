<template>
  <v-footer color="white">
    <v-row>
      <v-col cols="12" sm="4" class="text-center text-sm-left"
        ><a :href="bugUrl">{{ $t("reportABug") }}</a></v-col
      >
      <v-col cols="12" sm="4" class="text-center"
        >{{ author }} &copy;{{ copyright }}</v-col
      >
      <v-col cols="12" sm="4" class="text-center text-sm-right">{{
        version
      }}</v-col>
    </v-row>
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
