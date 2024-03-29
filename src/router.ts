import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
  ],
});
