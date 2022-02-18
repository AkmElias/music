import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const Manage = () => import(/* webPackChunkName: "groupedChunk" */ "@/views/Manage.vue");
const Song = () => import(/* webPackChunkName: "groupedChunk" */ "@/views/Song.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    // alias: "/manage",
    path: "/manage-mugic",
    meta: {
      requiresAuth: true,
    },
    component: Manage,
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    path: "/manage",
    redirect: {
      name: "manage",
    },
  },
  {
    name: "song",
    path: "/songs/:id",
    component: Song,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.auth.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
