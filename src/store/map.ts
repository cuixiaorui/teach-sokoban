import { defineStore } from "pinia";
import { Position } from "../composables/usePosition";
import { reactive } from "vue";

export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}
export type Map = MapTile[][];

export const useMapStore = defineStore("map", () => {
  let map = reactive<Map>([]);

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap);
  }

  function isWall(position: Position) {
    return map[position.y][position.x] === MapTile.WALL;
  }

  return {
    isWall,
    setupMap,
    map,
  };
});
