import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import Components from "@/views/Components.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/components",
    name: "Components",
    component: Components,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;