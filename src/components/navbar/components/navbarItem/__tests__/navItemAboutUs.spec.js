import { shallowMount } from "@vue/test-utils";
import NavbarItemAboutUs from "../navbarItemAboutUs.vue";

describe("navbarItemAboutUs.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(NavbarItemAboutUs);
  });

  it("hides the dropdown on inital render", () => {
    expect(wrapper.find(".c-courses__dropdown").exists()).toBe(false);
  });
  it("toggles the dropdown display", async () => {
    wrapper.get(".o-courses__item").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-courses__dropdown").exists()).toBe(true);
    wrapper.get(".o-courses__item").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-courses__dropdown").exists()).toBe(false);
  });
  it("toggles the dropdown display with mousehover", async () => {
    wrapper.get(".o-courses__item").trigger("mouseover");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-courses__dropdown").exists()).toBe(true);
    wrapper.get(".o-courses").trigger("mouseleave");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-courses__dropdown").exists()).toBe(false);
  });
});
