import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";

export const usePlayerStore = defineStore("player", () => {
  const { isWall } = useMapStore();
  const player = reactive({
    x: 1,
    y: 1,
  });

  function movePlayerToLeft() {
    if (isWall({ x: player.x - 1, y: player.y })) return;

    player.x -= 1;
  }

  function movePlayerToRight() {
    if (isWall({ x: player.x + 1, y: player.y })) return;

    player.x += 1;
  }

  function movePlayerToDown() {
    if (isWall({ x: player.x, y: player.y + 1 })) return;
    player.y += 1;
  }

  function movePlayerToUp() {
    if (isWall({ x: player.x, y: player.y - 1 })) return;
    player.y -= 1;
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  };
});
