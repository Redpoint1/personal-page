// Disabled until they are used
// import "jquery";
// import "popper.js";
// import "bootstrap";

import Vue from "vue";
import VueI18n from "vue-i18n";

import App from "./App.vue";
import router from "./router";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "sk"
});

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
