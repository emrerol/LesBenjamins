import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Erkek from "../views/Erkek.vue";
import Markalar from "../views/Markalar.vue"



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import { component } from "vue/types/umd";


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path :"/erkek", component:Erkek
  // },
  {
     path:"/erkek",
     name: "Erkek",
     component: () => import('@/views/Erkek.vue')
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
    path:"/markalar",
    name:"Markalar",
    component : Markalar
  },


  


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes 
});

export default router;
