import Vue from "vue";
import Vuex from "vuex";

import home from "@/store/home.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: [
    home
  ]
});
