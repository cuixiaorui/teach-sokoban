import { it, expect, describe, beforeEach } from "vitest";

import { setActivePinia, createPinia } from "pinia";
import { useEditTargetStore } from "../editTarget";

describe("editTarget", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should remove a target", () => {
    const { removeTarget, addTarget, createTarget, targets } =
      useEditTargetStore();

    const target = createTarget({ x: 1, y: 1 });
    addTarget(target);

    removeTarget(target);

    expect(targets.length).toBe(0);
  });
});
