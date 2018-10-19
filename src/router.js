import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { path: "/album", component: AlbumPage },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
