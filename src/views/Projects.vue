<template>
  <div class="container h-100">
    <form class="form-inline">
      <div class="form-group my-2">
        <label for="languageFilter" class="mr-1">Language</label>
        <select
          id="languageFilter"
          class="form-control"
          v-model="filterLanguage"
        >
          <option value="">All</option>
          <option
            v-for="language in languages"
            :value="language"
            :key="language"
            >{{ language }}</option
          >
        </select>
      </div>
    </form>
    <transition name="fade">
      <div class="row loading h-100 w-100 align-content-center" v-if="!loaded">
        <div class="col text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </transition>
    <transition-group
      tag="div"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      class="row align-content-stretch"
    >
      <div
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :data-index="index"
        class="col-lg-6 mb-3 project"
      >
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <a :href="project.html_url">{{ project.name }}</a>
            </h5>
            <h6 class="card-subtitle text-muted">
              {{ project.description || "No description" }}
            </h6>
            <div v-if="project.homepage">
              <a :href="project.homepage">Homepage</a>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import * as Velocity from "velocity-animate";

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
    let languages = new Set();
    for (let project of this.$data.projects) {
      if (project.language) {
        languages.add(project.language);
      }
    }
    return languages;
  }

  // Methods

  beforeEnter(el: HTMLElement) {
    el.style.opacity = "0";
  }

  enter(el: any, done: jquery.velocity.ElementCallback) {
    var delay = el.dataset["index"] * 100;
    setTimeout(function() {
      Velocity.animate(el, { opacity: "1" }, { complete: done });
    }, delay);
  }

  leave(el: any, done: jquery.velocity.ElementCallback) {
    var delay = el.dataset["index"] * 100;

    setTimeout(function() {
      Velocity.animate(el, { opacity: "0" }, { complete: done });
    }, delay);
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
}

.loading {
  position: absolute;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-leave-to {
  opacity: 0;
}

.project {
  transition: all 100ms;
}
</style>
