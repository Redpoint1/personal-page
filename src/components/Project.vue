<template>
  <v-card>
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
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component({
  i18n: {
    messages: {
      en: {
        homepage: "Homepage",
        noDescription: "No description"
      },
      sk: {
        homepage: "Domovská stránka",
        noDescription: "Bez popisu"
      }
    }
  }
})
export default class Projects extends Vue {
  @Prop(Object) readonly project: object | undefined;
}
</script>
