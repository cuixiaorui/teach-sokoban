import { computed } from "vue";

export interface Position {
  x: number;
  y: number;
}

export const STEP_GAME = 32;
export const STEP_EDIT = 34;

export function usePosition(pos: Position, step: number = STEP_GAME) {
  const position = computed(() => {
    return {
      left: pos.x * step + "px",
      top: pos.y * step + "px",
    };
  });

  return {
    position,
  };
}
