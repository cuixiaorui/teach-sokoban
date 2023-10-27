import { it, expect, describe, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { createPinia, setActivePinia } from "pinia";
import { useMapStore } from "../map";
import { useCargoStore } from "../cargo";

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ]);
    });

    it("should move to left", () => {
      // setup
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(0);
    });

    it("should move to right", () => {
      // setup
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(2);
    });

    it("should move to down", () => {
      // setup
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(2);
    });

    it("should move to up", () => {
      // setup
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(0);
    });
  });

  describe("collision wall", () => {
    beforeEach(() => {
      let map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ];

      const { setupMap } = useMapStore();
      setupMap(map);
    });

    it("should not move to left when collision a wall", () => {
      // setup
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(1);
    });

    it("should not move to right when collision a wall", () => {
      // setup
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(3);
    });

    it("should not move to up when collision a wall", () => {
      // setup
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(1);
    });
    it("should not move to down when collision a wall", () => {
      // setup
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 3;

      movePlayerToDown();

      expect(player.y).toBe(3);
    });
  });

  describe("push a cargo", () => {
    beforeEach(() => {
      let map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ];

      const { setupMap } = useMapStore();
      setupMap(map);
    });
    it("should push a cargo to left", () => {
      const { addCargo, createCargo } = useCargoStore();
      const cargo = createCargo({ x: 2, y: 1 });
      addCargo(cargo);
      // setup
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(2);
      expect(cargo.x).toBe(1);
    });

    it("should push a cargo to right", () => {
      const { addCargo, createCargo } = useCargoStore();
      const cargo = createCargo({ x: 2, y: 1 });
      addCargo(cargo);
      // setup
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(2);
      expect(cargo.x).toBe(3);
    });

    it("should push a cargo to up", () => {
      const { addCargo, createCargo } = useCargoStore();
      const cargo = createCargo({ x: 1, y: 2 });
      addCargo(cargo);
      // setup
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 3;

      movePlayerToUp();

      expect(player.y).toBe(2);
      expect(cargo.y).toBe(1);
    });

    it("should push a cargo to down", () => {
      const { addCargo, createCargo } = useCargoStore();
      const cargo = createCargo({ x: 1, y: 2 });
      addCargo(cargo);
      // setup
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(2);
      expect(cargo.y).toBe(3);
    });

    it("fix", () => {
      let map = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ];

      const { setupMap } = useMapStore();
      setupMap(map);

      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 3;
      player.y = 1;

      movePlayerToRight()

      expect(player.x).toBe(4)
    });
  });
});
