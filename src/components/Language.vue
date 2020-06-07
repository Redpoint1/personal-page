<template>
  <v-chip-group v-model="$i18n.locale" mandatory active-class="primary--text">
    <v-chip
      v-for="lang in $i18n.availableLocales"
      :value="lang"
      :key="lang"
      class="text-uppercase"
      >{{ lang }}</v-chip
    >
  </v-chip-group>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Language extends Vue {
  @Watch("$i18n.locale")
  onLocaleChanged(val: string, oldVal: string) {
    localStorage.setItem("lang", val);
  }
}
</script>
