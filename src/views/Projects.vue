<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="3">
        <v-autocomplete
          id="languageFilter"
          :label="$t('language')"
          :items="languages"
          v-model="filterLanguage"
          hide-details
        />
      </v-col>
    </v-row>
    <template v-if="!loaded">
      <v-row class="fill-height" align-content="center">
        <v-col class="text-center">
          <v-progress-circular indeterminate />
        </v-col>
      </v-row>
    </template>
    <transition-group
      tag="div"
      :css="false"
      @enter="enter"
      class="row align-content-stretch"
    >
      <v-col
        cols="12"
        sm="6"
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :data-index="index"
        class="fade-leave-active fade-leave-to"
      >
        <v-card height="100%">
          <v-card-title
            ><a :href="project.html_url">{{ project.name }}</a></v-card-title
          >
          <v-card-subtitle>{{
            project.description || "No description"
          }}</v-card-subtitle>
          <v-card-actions>
            <a v-if="project.homepage" :href="project.homepage">{{
              $t("homepage")
            }}</a>
          </v-card-actions>
        </v-card>
      </v-col>
    </transition-group>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Projects extends Vue {
  // Data

  projects = [];
  loaded = false;
  filterLanguage = "";

  // Lifecycle Hooks

  created() {
    if (this.$data.projects.length) return;
    fetch("https://api.github.com/users/Redpoint1/repos?sort=created")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.$data.projects = json;
        this.$data.loaded = true;
      });
  }

  // Computed

  get filteredProjects() {
    if (this.$data.filterLanguage) {
      return this.$data.projects.filter((item: any) => {
        return item.language === this.$data.filterLanguage;
      });
    }
    return this.$data.projects;
  }

  get languages() {
    const all = { text: this.$t("all"), value: "" };
    const languages = new Set();

    languages.add(all);

    for (let project of this.$data.projects) {
      if (project.language) {
        languages.add({ text: project.language, value: project.language });
      }
    }
    return Array.from(languages);
  }

  // Methods

  enter(el: any, done: any) {
    var delay = el.dataset["index"] * 100;
    setTimeout(function() {
      el.style.opacity = "1";
      done();
    }, delay);
  }
}
</script>

<style lang="scss">
.fade-leave-active {
  transition: all 0.5s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
