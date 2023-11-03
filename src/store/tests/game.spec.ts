import { it, expect, describe, beforeEach } from "vitest";
import { useGameStore } from "../game";
import { useCargoStore } from "../cargo";
import { useTargetStore } from "../target";
import { createPinia, setActivePinia } from "pinia";

describe("game", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should game completed", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1 });
    addCargo(cargo);

    const { addTarget, createTarget } = useTargetStore();
    addTarget(createTarget({ x: 3, y: 1 }));

    moveCargo(cargo, 1, 0);

    const { detectionGameCompleted, game } = useGameStore();

    detectionGameCompleted()
    expect(game.isGameCompleted).toBe(true);
  });

  it("should not game completed", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1 });
    addCargo(cargo);

    const { addTarget, createTarget } = useTargetStore();
    addTarget(createTarget({ x: 3, y: 1 }));

    moveCargo(cargo, 1, 0);
    moveCargo(cargo, 1, 0);

    const { detectionGameCompleted, game } = useGameStore();

    detectionGameCompleted()
    expect(game.isGameCompleted).toBe(false);

  });
});
