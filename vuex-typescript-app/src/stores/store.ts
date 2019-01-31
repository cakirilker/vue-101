import Vue from "vue";
import Vuex from "vuex";
import def from "./default-module";
import todo from "./todo-module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    def,
    todo,
  },
});
