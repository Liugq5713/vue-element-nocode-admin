import Vuex from "vuex";
import Vue from "vue";
import getters from "./getters";
import form from "./modules/form";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    form
  },
  getters,
  strict: debug
});
