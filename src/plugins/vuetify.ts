import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

function isDarkTheme() {
  let isDark = JSON.parse(<string>localStorage.getItem("darkTheme"));

  if (!isDark) {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return isDark;
}

export default new Vuetify({
  theme: {
    dark: isDarkTheme(),
    options: {
      cspNonce: "ohmygodvuetify5aeWE7q"
    }
  }
});
