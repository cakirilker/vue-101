import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    },
    {
      path: "/orders/:id",
      name: "orders",
      component: () => import("@/views/Order")
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/views/Products")
    }
  ]
});
