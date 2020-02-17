import { shallowMount } from "@vue/test-utils";
import TheNavbar from "../TheNavbar.vue";

describe("TheNavbar.vue", () => {
  it("hides the navbar items on inital render", () => {
    const wrapper = shallowMount(TheNavbar, {
      data() {
        return {
          isNavOpen: false
        };
      }
    });
    expect(wrapper.find(".c-navbar__items").exists()).toBe(false);
  });
  it("displays and hides the navbar items", async () => {
    const wrapper = shallowMount(TheNavbar);
    wrapper.setData({isNavOpen: false});
    await wrapper.vm.$nextTick()
    wrapper.get(".c-menu-handle").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-navbar__items").exists()).toBe(true);
    wrapper.get(".c-menu-handle").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".c-navbar__items").exists()).toBe(false);
  });
});
