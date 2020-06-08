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
    <v-fade-transition>
      <div class="loader text-center" v-if="!loaded">
        <v-progress-circular color="black" indeterminate />
      </div>
    </v-fade-transition>
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
            project.description || $t("noDescription")
          }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text v-if="project.homepage" :href="project.homepage">{{
              $t("homepage")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </transition-group>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  i18n: {
    messages: {
      en: {
        language: "Language",
        all: "All",
        homepage: "Homepage",
        noDescription: "No description"
      },
      sk: {
        language: "Jazyk",
        all: "Všetko",
        homepage: "Domovská stránka",
        noDescription: "Bez popisu"
      }
    }
  }
})
export default class Projects extends Vue {
  // Data

  projects = [];
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

  get loaded() {
    return this.languages.length !== 1;
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
.loader {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 1;
}

.fade-leave-active {
  transition: all 0.5s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
