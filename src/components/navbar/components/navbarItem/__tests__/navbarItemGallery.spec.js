import { shallowMount } from "@vue/test-utils";
import NavbarItemGallery from "../navbarItemGallery.vue";

describe("navbarItemGallery.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(NavbarItemGallery);
  });

  it("hides the dropdown on inital render", () => {
    expect(wrapper.find(".c-gallery__dropdown").exists()).toBe(false);
  });
  it("toggles the dropdown display", async () => {
    wrapper.get(".o-gallery__item").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-gallery__dropdown").exists()).toBe(true);
    wrapper.get(".o-gallery__item").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-gallery__dropdown").exists()).toBe(false);
  });
  it("toggles the dropdown display with mousehover", async () => {
    wrapper.get(".o-gallery__item").trigger("mouseover");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-gallery__dropdown").exists()).toBe(true);
    wrapper.get(".o-gallery").trigger("mouseleave");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-gallery__dropdown").exists()).toBe(false);
  });
});
