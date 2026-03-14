<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="4" class="text-center">
        <v-btn variant="plain" :size icon href="https://github.com/Redpoint1">
          <v-icon :size icon="mdi-github" />
        </v-btn>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-btn variant="plain" :size icon href="https://www.linkedin.com/in/richardrozar/">
          <v-icon :size icon="mdi-linkedin" />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const size = 'clamp(125px, 50vh, 250px)'
</script>
