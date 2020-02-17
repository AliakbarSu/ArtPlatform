import { shallowMount, createLocalVue } from "@vue/test-utils";
import TheHomePage from "../TheHomePage.vue";
import Vuex from "vuex";
import { trendings } from "../../../services/dummyData";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("TheHomePage.vue", () => {
  let wrapper = null;
  let actions;
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      state: {
        trendings
      }
    });
    wrapper = shallowMount(TheHomePage, {
      stubs: ["router-link"],
      store,
      localVue
    });
  });
  it("should fetch the correct data from store", () => {
    expect(wrapper.vm.trendings).toBe(trendings);
  });
});
