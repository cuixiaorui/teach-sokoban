import { defineStore } from "pinia";
import { reactive } from "vue";

interface Target {
  x: number;
  y: number;
}

export const useTargetStore = defineStore("target", () => {
  const targets = reactive([
    {
      x: 4,
      y: 3,
    },
    {
      x: 5,
      y: 3,
    },
  ]);

  return {
    targets
  }
});
