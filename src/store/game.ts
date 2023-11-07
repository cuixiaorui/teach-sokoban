import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";
import { reactive } from "vue";
import { useMapStore, type Map } from "./map";
import { usePlayerStore } from "./player";
import { useTargetStore } from "./target";
import { LevelGameData } from "../game/gameData";

interface Game {
  isGameCompleted: boolean;
}


export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isGameCompleted: false,
  });

  function detectionGameCompleted() {
    const { cargos } = useCargoStore();

    game.isGameCompleted = cargos.every((c) => c.onTarget);
  }

  function setupGame(levelGameData: LevelGameData) {
    const { player } = usePlayerStore();
    const { setupMap } = useMapStore();
    const { addCargo, createCargo } = useCargoStore();
    const { addTarget, createTarget } = useTargetStore();

    player.x = levelGameData.player.x;
    player.y = levelGameData.player.y;

    setupMap(levelGameData.map);

    levelGameData.cargos.forEach((c) => {
      addCargo(createCargo({ x: c.x, y: c.y }));
    });

    levelGameData.targets.forEach((t) => {
      addTarget(createTarget({ x: t.x, y: t.y }));
    });
  }

  return {
    game,
    setupGame,
    detectionGameCompleted,
  };
});
