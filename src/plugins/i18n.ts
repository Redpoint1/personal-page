import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem("lang") || undefined,
  fallbackLocale: "en",
  messages: {
    en: {},
    sk: {},
  },
});
