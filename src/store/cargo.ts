import { defineStore } from "pinia";

interface Cargo {
  x: number;
  y: number;
}

export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo[] = [
    {
      x: 2,
      y: 2,
    },

    {
      x: 3,
      y: 3,
    },
  ];

  return {
    cargos,
  };
});
