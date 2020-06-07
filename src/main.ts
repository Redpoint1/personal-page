// Disabled until they are used
// import "jquery";
// import "popper.js";
// import "bootstrap";

import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
