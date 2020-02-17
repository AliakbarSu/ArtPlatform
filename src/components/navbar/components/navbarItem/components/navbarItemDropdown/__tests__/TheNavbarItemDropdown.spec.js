import { shallowMount } from "@vue/test-utils";
import TheNavbarItemDropdown from "../TheNavbarItemDropdown.vue";
import { courses } from "../../../../../services/dummyData";

describe("TheNavbarItemDropdown.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(TheNavbarItemDropdown);
  });

  it("should renders courses props", () => {
    wrapper = shallowMount(TheNavbarItemDropdown, {
      propsData: {
        courses: [courses[0]]
      },
      stubs: ["router-link"]
    });
    expect(wrapper.find(".c-dropdown__item").exists()).toBe(true);
    expect(wrapper.findAll(".c-dropdown__item").length).toBe(1);
  });
  it("should not render courses props", () => {
    wrapper = shallowMount(TheNavbarItemDropdown, {
      propsData: {
        courses: []
      },
      stubs: ["router-link"]
    });
    expect(wrapper.find(".c-dropdown__item").exists()).toBe(false);
    expect(wrapper.findAll(".c-dropdown__item").length).toBe(0);
  });
});
