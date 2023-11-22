<template>
  <div>
    <h3>元素选择区</h3>
    <div class="m-2 space-y-2">
      <div>
        row: <input type="text" class="border border-blue-50" v-model="row" />
      </div>
      <div>
        col: <input type="text" class="border border-blue-50" v-model="col" />
      </div>
    </div>

    <div class="flex space-x-2 m-2">
      <h4>地图:</h4>
      <EditElement :edit-element="wallEditElement"></EditElement>
      <EditElement :edit-element="floorEditElement"></EditElement>
    </div>

    <div class="flex">
      <h4>玩家:</h4>
      <EditElement :edit-element="playerEditElement"></EditElement>
    </div>

    <div>当前选择的: {{ selectedEditElementName }}</div>
  </div>
</template>

<script setup lang="ts">
import EditElement from "./EditElement.vue";
import {
  wallEditElement,
  floorEditElement,
  playerEditElement,
} from "@/store/edit/editElement";
import { useMapEditStore } from "@/store/edit/mapEdit";
import { computed, toRefs, watchEffect } from "vue";
import { useEditElementStore } from "@/store/edit/editElement";

const { initMap, updateMapRow, updateMapCol } = useMapEditStore();
const { row, col } = toRefs(useMapEditStore());
const { getCurrentSelectedEditElement } = useEditElementStore();

initMap();

watchEffect(() => {
  if (!row.value) return;
  updateMapRow();
});

watchEffect(() => {
  if (!col.value) return;
  updateMapCol();
});

const selectedEditElementName = computed(() => {
  if (!getCurrentSelectedEditElement()) {
    return "没有选择";
  }

  return getCurrentSelectedEditElement().name
});
</script>

<style scoped></style>
