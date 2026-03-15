<template>
  <v-footer class="px-2 d-flex align-end">
    <v-row no-gutters>
      <v-col cols="12" sm="4" align-self="center" class="text-center text-sm-left">
        <v-btn variant="text" :href="bugUrl" color="error">
          <v-icon :icon="mdiBug" start />{{ t('reportABug') }}</v-btn
        >
      </v-col>
      <v-col cols="12" sm="4" align-self="center" class="text-center"
        >{{ t('copyright') }} &copy; {{ copyright }} - <b>{{ author }}</b></v-col
      >
      <v-col cols="12" sm="4" align-self="center" class="text-center text-sm-right">{{
        version
      }}</v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { mdiBug } from '@mdi/js'

const { t } = useI18n({
  locale: 'sk',
  fallbackLocale: 'en',
  messages: {
    en: {
      reportABug: 'Report a bug',
      copyright: 'Copyright',
    },
    sk: {
      reportABug: 'Nahlásiť chybu',
      copyright: 'Všetky práva vyhradené',
    },
  },
})

const author = computed(() => import.meta.env.VUE_APP_AUTHOR)
const copyright = computed(() => new Date().getFullYear())
const version = computed(() => import.meta.env.VUE_APP_VERSION)
const bugUrl = computed(() => import.meta.env.VUE_APP_BUG_REPORT)
</script>

<style scoped>
.v-footer.v-theme--dark {
  background-color: transparent;
}
</style>
