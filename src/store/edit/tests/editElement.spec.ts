import { setActivePinia, createPinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { floorEditElement, useEditElementStore, wallEditElement } from "../editElement";
import { useMapEditStore } from "../mapEdit";
import { MapTile } from "@/store/map";

describe("editElement", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should change to wall when current selected element is wall", () => {
    const { map } = useMapEditStore();
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } =
      useEditElementStore();

    setCurrentSelectedEditElement(wallEditElement);

    getCurrentSelectedEditElement().execute({ x: 1, y: 1 });

    expect(map[1][1]).toBe(MapTile.WALL);
  });

  it("should change to floor when current selected element is floor", () => {
    const { map } = useMapEditStore();
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } =
      useEditElementStore();

    setCurrentSelectedEditElement(floorEditElement);

    getCurrentSelectedEditElement().execute({ x: 1, y: 1 });

    expect(map[1][1]).toBe(MapTile.FLOOR);
  });
});
