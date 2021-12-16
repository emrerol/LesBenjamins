import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Erkek from "../views/Erkek.vue";
import Markalar from "../views/Markalar.vue"
import Kadın from "../views/Kadın.vue";
import LoginPage from "../views/LoginPage.vue";
import Koleksiyon from "../views/Koleksiyon.vue";
import Cocuk from "../views/Cocuk.vue";




import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import { component } from "vue/types/umd";


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
     path:"/erkek",
     name: "Erkek",
     component: Erkek
  },
  {
    path: "/kadın",
    name: "Kadın",
    component: Kadın,
  },
  {
    path: "/cocuk",
    name: "Cocuk",
    component: Cocuk,
  },
  {
    path: "/koleksiyon",
    name: "Koleksiyon",
    component: Koleksiyon,
  },
  {
    path:"/markalar",
    name:"Markalar",
    component : Markalar
  },
  {
    path:"/login",
    name:"Login",
    component : LoginPage
  },


  


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
