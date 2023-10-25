import { computed } from "vue";

export interface Position {
  x: number;
  y: number;
}

export function usePosition(pos: Position) {
  const STEP = 32;
  const position = computed(() => {
    return {
      left: pos.x * STEP + "px",
      top: pos.y * STEP + "px",
    };
  });

  return {
    position,
  };
}
