import { shallowMount } from "@vue/test-utils";
import TheGalleryDropdown from "../TheGalleryDropdown.vue";
import { gallery } from "../../../../../services/dummyData";

describe("TheGalleryDropdown.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(TheGalleryDropdown);
  });

  it("should renders gallery props", () => {
    wrapper = shallowMount(TheGalleryDropdown, {
      propsData: {
        gallery: [gallery[0]]
      },
      stubs: ["router-link"]
    });
    expect(wrapper.find(".c-dropdown__item").exists()).toBe(true);
    expect(wrapper.findAll(".c-dropdown__item").length).toBe(1);
  });
  it("should not render props", () => {
    wrapper = shallowMount(TheGalleryDropdown, {
      propsData: {
        gallery: []
      },
      stubs: ["router-link"]
    });
    expect(wrapper.find(".c-dropdown__item").exists()).toBe(false);
    expect(wrapper.findAll(".c-dropdown__item").length).toBe(0);
  });
});
