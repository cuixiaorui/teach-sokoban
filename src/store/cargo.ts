import { defineStore } from "pinia";
import { Position } from "../composables/usePosition";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { useTargetStore } from "./target";

export interface Cargo {
  x: number;
  y: number;
  onTarget: boolean;
}

export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo[] = reactive([]);

  function createCargo({ x, y }: { x: number; y: number }): Cargo {
    return {
      x,
      y,
      onTarget: false,
    };
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo);
  }

  function findCargo(position: Position) {
    return cargos.find((c) => {
      return c.x === position.x && c.y === position.y;
    });
  }

  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const { isWall } = useMapStore();
    const position = {
      x: cargo.x + dx,
      y: cargo.y + dy,
    };

    if (isWall(position)) return false;

    if (findCargo(position)) return false;

    cargo.x += dx;
    cargo.y += dy;

    detectionTarget(cargo)

    return true;
  }

  function detectionTarget(cargo: Cargo) {
    const { findTarget } = useTargetStore();
    cargo.onTarget = !!findTarget(cargo);
  }

  return {
    addCargo,
    createCargo,
    findCargo,
    moveCargo,
    cargos,
  };
});
