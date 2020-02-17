import { shallowMount } from "@vue/test-utils";
import DropdownFooter from "../dropdownFooter.vue";
describe("dropdownFooter.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(DropdownFooter, {
      stubs: ["router-link"],
      propsData: {
        to: "/test"
      }
    });
  });
  it("should set the correct path on router-link", () => {
    expect(wrapper.find("router-link-stub").attributes().to).toBe("/test");
  });
});
