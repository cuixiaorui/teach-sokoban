import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";
import { reactive } from "vue";
import { useMapStore, type Map } from "./map";
import { usePlayerStore } from "./player";
import { useTargetStore } from "./target";
import { GameData, LevelGameData } from "../game/gameData";

interface Game {
  isGameCompleted: boolean;
  level: number;
}

export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isGameCompleted: false,
    level: 1,
  });

  let _gameData: GameData;

  function detectionGameCompleted() {
    const { cargos } = useCargoStore();

    game.isGameCompleted = cargos.every((c) => c.onTarget);
  }

  function setupGame(gameData: GameData) {
    _gameData = gameData;
    setupLevel();
  }

  function toNextLevel() {
    game.level += 1;
    game.isGameCompleted = false;
    setupLevel();
  }

  function setupLevel() {
    const levelGameData = _gameData[game.level - 1];

    const { player } = usePlayerStore();
    const { setupMap } = useMapStore();
    const { addCargo, createCargo, cleanAllCargos } = useCargoStore();
    const { addTarget, createTarget, cleanAllTargets } = useTargetStore();

    player.x = levelGameData.player.x;
    player.y = levelGameData.player.y;

    setupMap(levelGameData.map);

    cleanAllCargos();
    levelGameData.cargos.forEach((c) => {
      addCargo(createCargo({ x: c.x, y: c.y }));
    });

    cleanAllTargets();
    levelGameData.targets.forEach((t) => {
      addTarget(createTarget({ x: t.x, y: t.y }));
    });
  }

  return {
    game,
    toNextLevel,
    setupGame,
    detectionGameCompleted,
  };
});
