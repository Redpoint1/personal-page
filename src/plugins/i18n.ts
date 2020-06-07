import Vue from "vue";
import VueI18n from "vue-i18n";

const messages = {
  en: {
    reportABug: "Report a bug",
    home: "Home",
    projects: "Projects",
    language: "Language",
    all: "All",
    loading: "Loading",
    homepage: "Homepage",
    noDescription: "No description"
  },
  sk: {
    reportABug: "Nahlásiť chybu",
    home: "Domov",
    projects: "Projekty",
    language: "Jazyk",
    all: "Všetko",
    loading: "Načítavam",
    homepage: "Domovská stránka",
    noDescription: "Bez popisu"
  }
};

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en",
  messages
});
