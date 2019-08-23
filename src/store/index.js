import Vuex from "vuex";
import Vue from "vue";
import getters from "./getters";
import form from "./modules/form";
import table from "./modules/table";
import path from "./modules/path";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    path,
    form,
    table
  },
  getters,
  strict: debug
});
