<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex justify-content-around">
        <a href="https://github.com/Redpoint1">
          <Github class="brand" />
        </a>
      </div>
      <div class="col d-flex justify-content-around">
        <a href="https://www.linkedin.com/in/richardrozar/">
          <LinkedIn class="brand" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Github from "@/assets/github.svg?inline";
import LinkedIn from "@/assets/linkedin.svg?inline";

@Component({
  components: {
    Github,
    LinkedIn
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
.brand {
  height: 25vw;
  min-height: 100px;
  max-height: 200px;
  transition: fill 1s;
  fill: #777;

  &:hover {
    fill: #000;
  }
}
</style>
