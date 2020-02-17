import { shallowMount } from "@vue/test-utils";
import NavbarItemCourses from "../navbarItemCourses.vue";

describe("navbarItemCourses.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(NavbarItemCourses);
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
