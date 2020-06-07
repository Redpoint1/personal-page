<template>
  <v-app-bar app elevate-on-scroll color="white">
    <v-btn exact text class="mr-2" :to="{ name: 'home' }"
      ><v-icon>mdi-home</v-icon> {{ $t("home") }}</v-btn
    >

    <v-btn exact text :to="{ name: 'projects' }"
      ><v-icon>mdi-github</v-icon>{{ $t("projects") }}</v-btn
    >
  </v-app-bar>
</template>
