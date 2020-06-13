<template>
  <v-switch :label="$t('dark')" v-model="isDarkTheme" hide-details />
</template>

<script lang="ts">
import { Watch, Component, Vue } from "vue-property-decorator";
import Language from "@/components/Language.vue";

@Component({
  components: {
    Language
  },
  i18n: {
    messages: {
      en: {
        dark: "Dark"
      },
      sk: {
        dark: "Tmavý"
      }
    }
  }
})
export default class Theme extends Vue {
  get isDarkTheme() {
    return this.$vuetify.theme.dark;
  }

  set isDarkTheme(value: boolean) {
    this.$vuetify.theme.dark = value;
  }

  @Watch("$vuetify.theme.dark")
  onThemeChanged(val: string, oldVal: string) {
    localStorage.setItem("dark", val);
  }
}
</script>
