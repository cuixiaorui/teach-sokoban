import Game from "../view/Game.vue";
import Edit from "../view/Edit.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "Game",
    },
    {
      path: "/game",
      component: Game,
      name: "Game",
    },
    {
      path: "/edit",
      component: Edit,
      name: "Edit",
    },
  ],
});
