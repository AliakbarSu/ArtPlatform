import { shallowMount, createLocalVue } from "@vue/test-utils";
import NavbarItemPricing from "../navbarItemPricing.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("navbarItemPricing.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(NavbarItemPricing, {
      localVue
    });
  });

  it("should display 'Pricing'", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
