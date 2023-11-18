import { reactive } from "vue";
import { defineStore } from "pinia";


export const useMapEditStore = defineStore("map-edit", () => {
  const map = reactive([
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
  ]);


  return {
    map,
  };
});
