let isDrag = false;

export function useDrag() {
  function startDrag() {
    isDrag = true;
  }

  function stopDrag() {
    isDrag = false;
  }

  function isDragging() {
    return isDrag;
  }

  return {
    startDrag,
    stopDrag,
    isDragging,
  };
}
