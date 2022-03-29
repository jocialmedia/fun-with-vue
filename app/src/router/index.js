import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import Components from "@/views/Components.vue";
import StoragePage from "@/views/StoragePage.vue";
import Lifecycle from "@/views/LifecycleHookPage.vue";
import About from "@/views/AboutPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/components",
    name: "Components",
    component: Components,
  },
  {
    path: "/lifecycle",
    name: "Lifecycle",
    component: Lifecycle,
  },
  {
    path: "/storage",
    name: "Storage",
    component: StoragePage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;