import { it, expect, describe, beforeEach } from "vitest";

import { setActivePinia, createPinia } from "pinia";
import { useEditCargoStore } from "../editCargo";

describe("editCargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should remove a cargo", () => {
    const { removeCargo, addCargo, createCargo, cargos } = useEditCargoStore();

    const cargo = createCargo({ x: 1, y: 1 });
    addCargo(cargo);

    removeCargo(cargo);

    expect(cargos.length).toBe(0);
  });
});
