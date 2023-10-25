import { it, expect, describe, beforeEach } from "vitest";
import { useMove } from "../player";
import { createPinia, setActivePinia } from "pinia";
import { usePlayerStore } from "../../../store/player";
import { useMapStore } from "../../../store/map";

beforeEach(() => {
  setActivePinia(createPinia());
});

it("should move to left when press ArrowLeft", () => {
  const { setupMap } = useMapStore();
  setupMap([
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ]);

  const { player } = usePlayerStore();
  player.x = 1;
  player.y = 1;

  useMove();

  window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }));

  expect(player.x).toBe(0);
});
