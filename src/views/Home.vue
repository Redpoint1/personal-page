<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="4" class="text-center">
        <a href="https://github.com/Redpoint1">
          <img svg-inline class="brand" src="@mdi/svg/svg/github.svg" />
        </a>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <a href="https://www.linkedin.com/in/richardrozar/">
          <img svg-inline class="brand" src="@mdi/svg/svg/linkedin.svg" />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
$brand-color: #000;

.brand {
  height: 50vw;
  width: unset;
  min-height: 125px;
  max-height: 250px;
  transition: fill 0.5s;
  fill: scale-color($brand-color, $lightness: 50%);

  &:hover {
    fill: $brand-color;
  }
}
</style>
