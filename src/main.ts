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

// "en-US" is the default
if (i18n.locale === "en-US") {
  const language = navigator.languages.find(lang => {
    return i18n.availableLocales.indexOf(lang) > -1;
  });

  i18n.locale = language || <string>i18n.fallbackLocale;
  localStorage.setItem("lang", i18n.locale);
}

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
