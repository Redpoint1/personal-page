import { mount, createLocalVue } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";
import Vuetify from "vuetify";
import VueI18n from "vue-i18n";

const localVue = createLocalVue();

localVue.use(Vuetify);
localVue.use(VueI18n);

describe("Footer.vue", () => {
  let vuetify: typeof Vuetify;
  let i18n: VueI18n;
  beforeEach(() => {
    vuetify = new Vuetify();
    i18n = new VueI18n();
  });

  it("renders all data in the footer", () => {
    const wrapper = mount(Footer, {
      localVue,
      vuetify,
      i18n
    });
    const parts = wrapper.findAll("div");
    expect(parts.length).toEqual(3);

    expect(
      parts
        .at(0)
        .find("a")
        .attributes("href")
    ).toBe(process.env.VUE_APP_BUG_REPORT);

    // @ts-ignore
    console.log(wrapper.vm.i18n)
  });
});
