import { shallowMount } from "@vue/test-utils";
import Hero from "../hero.vue";
describe("hero.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(Hero, {
      slots: {
        default: "<div class='slot__item'>testing</div>"
      },
      stubs: ["router-link"]
    });
  });
  it("should display slot content correctly", () => {
    expect(wrapper.find(".slot__item").exists()).toBe(true);
  });
  it("should not display slot content", () => {
    wrapper = shallowMount(Hero, {
      slots: {
        default: ""
      },
      stubs: ["router-link"]
    });
    expect(wrapper.find(".slot__item").exists()).toBe(false);
  });
});
