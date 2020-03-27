<i18n>
{
  "en": {
    "reportABug": "Report a bug"
  },
  "sk": {
    "reportABug": "Nahlásiť chybu"
  }
}
</i18n>

<template>
  <footer id="sticky-footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <a :href="bugUrl">{{ $t("reportABug") }}</a>
        </div>
        <div class="col text-center">{{ author }} &copy;{{ copyright }}</div>
        <div class="col text-right">
          {{ version }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class App extends Vue {
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
