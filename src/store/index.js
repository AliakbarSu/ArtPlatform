import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { trendings } from "../services/dummyData";

export default new Vuex.Store({
  state: {
    trendings
  },
  mutations: {},
  actions: {},
  modules: {}
});
