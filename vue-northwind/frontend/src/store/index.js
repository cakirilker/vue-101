import Vue from "vue";
import Vuex from "vuex";

import home from "@/store/home.module";
import order from "@/store/order.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: [
    home,
    order
  ]
});
