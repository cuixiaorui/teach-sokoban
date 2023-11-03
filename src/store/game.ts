import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";
import { reactive } from "vue";

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

  return {
    game,
    detectionGameCompleted,
  };
});
