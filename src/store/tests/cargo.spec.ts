import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { createPinia, setActivePinia } from "pinia";

describe("cargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should add a cargo", () => {
    const { addCargo, createCargo, cargos } = useCargoStore();
    addCargo(createCargo({ x: 2, y: 1 }));

    expect(cargos.length).toBe(1);
  });
});
