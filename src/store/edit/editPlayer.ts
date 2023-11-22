import { defineStore } from "pinia";
import { reactive } from "vue";

interface EditPlayer {
  x: number;
  y: number;
}

export const useEditPlayerStore = defineStore("edit-player", () => {
  const player = reactive<EditPlayer>({
    x: 0,
    y: 0,
  });

  return {
    player,
  };
});
