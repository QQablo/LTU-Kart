import { createRouter, createWebHistory } from "vue-router";
import Lobby from "./views/Lobby.vue";
import SinglePlayer from "./views/SinglePlayer.vue";
import MultiPlayer from "./views/MultiPlayer.vue";

const routes = [
  { path: "/", component: Lobby }, 
  { path: "/singleplayer", component: SinglePlayer },
  { path: "/multiplayer", component: MultiPlayer }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
