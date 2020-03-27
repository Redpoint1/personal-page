<template>
  <div id="app" class="d-flex flex-column h-100">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Navigation,
    Footer
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
