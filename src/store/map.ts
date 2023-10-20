import { defineStore } from "pinia";

export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}

export const useMapStore = defineStore("map", () => {
  const map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ];

  return {
    map,
  };
});
