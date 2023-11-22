import { setActivePinia, createPinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import {
  floorEditElement,
  useEditElementStore,
  wallEditElement,
  playerEditElement,
} from "../editElement";
import { useMapEditStore } from "../mapEdit";
import { MapTile } from "@/store/map";
import { useEditPlayerStore } from "../editPlayer";

describe("editElement", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const { initMap } = useMapEditStore();
    initMap();
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

  it("should update position of player when current selected element is player", () => {
    const { player } = useEditPlayerStore();
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } =
      useEditElementStore();

    setCurrentSelectedEditElement(playerEditElement);

    const position = {
      x: 1,
      y: 1,
    };
    getCurrentSelectedEditElement().execute(position);

    expect(player.x).toBe(position.x);
    expect(player.y).toBe(position.y);
  });
});
