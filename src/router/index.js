import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kadın",
    name: "Kadın",
    component: () => import('@/views/Kadın.vue'),
  },
  {
    path: "/cocuk",
    name: "Cocuk",
    component: () => import('@/views/Cocuk.vue'),
  },
  {
    path: "/koleksiyon",
    name: "Koleksiyon",
    component: () => import('@/views/Koleksiyon.vue'),
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
