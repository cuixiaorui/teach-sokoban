import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { useCargoStore } from "./cargo";

export const usePlayerStore = defineStore("player", () => {
  const { isWall } = useMapStore();
  const player = reactive({
    x: 1,
    y: 1,
  });

  function _move(dx: number, dy: number) {
    const nextPosition = {
      x: player.x + dx,
      y: player.y + dy,
    };

    if (isWall(nextPosition)) return;

    const { findCargo, moveCargo } = useCargoStore();
    const cargo = findCargo(nextPosition);

    if (cargo) {
      const isMoveCargo = moveCargo(cargo, dx, dy);
      if (!isMoveCargo) return;
    }

    player.x += dx;
    player.y += dy;
  }

  function movePlayerToLeft() {
    _move(-1, 0);
  }

  function movePlayerToRight() {
    _move(1, 0);
  }

  function movePlayerToDown() {
    _move(0, 1);
  }

  function movePlayerToUp() {
    _move(0, -1);
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
  };
});
