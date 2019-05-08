<template>
  <div class="container">
    <div class="row d-flex align-content-stretch">
      <div v-for="project in projects" :key="project.id" class="col-lg-6 mb-3">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

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
}
</script>
