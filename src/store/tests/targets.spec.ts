import { it, expect, describe, beforeEach } from "vitest";

import { useTargetStore } from "../target";
import { createPinia, setActivePinia } from "pinia";

describe("target", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should clean all targets", () => {
    const { addTarget, createTarget, targets, cleanAllTargets } =
      useTargetStore();
    addTarget(createTarget({ x: 3, y: 1 }));
    addTarget(createTarget({ x: 2, y: 1 }));

    cleanAllTargets();

    expect(targets.length).toBe(0);
  });
});
