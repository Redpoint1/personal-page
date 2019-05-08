<template>
  <div id="app" class="d-flex flex-column h-100">
    <Navigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navigation from "@/components/Navigation.vue";

@Component({
  components: {
    Navigation
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";

main {
  flex: 1 0 auto;
}

#sticky-footer {
  flex-shrink: none;
}
</style>
