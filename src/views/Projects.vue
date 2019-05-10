<template>
  <div class="container">
    <div class="row" v-if="!projects.length">
      <div class="col text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <transition-group
      tag="div"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      class="row d-flex align-content-stretch"
    >
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :data-index="index"
        class="col-lg-6 mb-3 flip-list-item"
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
  projects = [];

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
