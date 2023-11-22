import { Position } from "@/composables/usePosition";
import { defineStore } from "pinia";
import { MapTile } from "../map";
import { useMapEditStore } from "./mapEdit";
import wallImg from "@/assets/wall.png";
import floorImg from "@/assets/floor.png";
import playerImg from '@/assets/keeper.png';
import { useEditPlayerStore } from "./editPlayer";

export interface EditElement {
  img: string;
  execute: (position: Position) => void;
}

export const wallEditElement: EditElement = {
  img: wallImg,
  execute(position) {
    const { map } = useMapEditStore();
    map[position.y][position.x] = MapTile.WALL;
  },
};

export const floorEditElement: EditElement = {
  img: floorImg,
  execute(position) {
    const { map } = useMapEditStore();
    map[position.y][position.x] = MapTile.FLOOR;
  },
};

export const playerEditElement: EditElement = {
  img: playerImg,
  execute(position) {
    const { player } = useEditPlayerStore();
    player.x = position.x;
    player.y = position.y;
  },
};

export const useEditElementStore = defineStore("edit-element", () => {
  let currentSelectedEditElement: EditElement;

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement;
  }

  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement = editElement;
  }

  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement,
  };
});
