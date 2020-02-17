import { shallowMount } from "@vue/test-utils";
import TheAboutUsDropdown from "../TheAboutusDropdown.vue";
describe("TheAboutusDropdown.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(TheAboutUsDropdown, {
      stubs: ["router-link"]
    });
  });
  it("should render the component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
