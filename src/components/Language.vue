<template>
  <v-select
    v-model="$root.$i18n.locale"
    :items="languages"
    hide-details
    dense
  />
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

interface Select {
  text: string;
  value: string;
}

interface Languages {
  [key: string]: string;
}

@Component
export default class Language extends Vue {
  @Watch("$root.$i18n.locale")
  onLocaleChanged(val: string, oldVal: string) {
    localStorage.setItem("lang", val);
  }

  get languages() {
    let items: Select[] = [];

    for (const lang of this.$root.$i18n.availableLocales) {
      items.push({
        value: lang,
        text: `${this.countryFlag(lang)} ${lang.toUpperCase()}`
      });
    }

    return items;
  }

  countryFlag(language: string) {
    const country: Languages = {
      en: "🇬🇧",
      sk: "🇸🇰"
    };

    return country[language] ?? "🏴‍☠️"; //pirate fla
  }
}
</script>

<style scoped>
.v-text-field >>> .v-input__control > .v-input__slot::before {
  border-style: none;
}
.v-text-field.v-input--is-focused
  >>> .v-input__control
  > .v-input__slot::after {
  content: none;
}
</style>
