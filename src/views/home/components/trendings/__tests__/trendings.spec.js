import { shallowMount } from "@vue/test-utils";
import Trendings from "../trendings.vue";
import { trendings } from "../../../../../services/dummyData";
describe("trendings.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(Trendings, {
      stubs: ["router-link"]
    });
  });
  it("should render props 'trendings' correctly", () => {
    wrapper = shallowMount(Trendings, {
      propsData: {
        trendings: [trendings[0], [trendings[1]]]
      },
      stubs: ["router-link"]
    });
    expect(wrapper.findAll(".c-trendings__items").length).toBe(2);
  });
});
