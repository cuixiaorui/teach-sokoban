<template>
  <div class="border border-white" @click="handleClick">
    <template v-if="map[props.y][props.x] === MapTile.WALL">
      <img :src="wallImg" />
    </template>
    <template v-else-if="map[props.y][props.x] === MapTile.FLOOR">
      <img :src="floorImg" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { MapTile } from "@/store/map";
import wallImg from "@/assets/wall.png";
import floorImg from "@/assets/floor.png";
import { useEditElementStore } from "@/store/edit/editElement";
import { useMapEditStore } from "@/store/edit/mapEdit";

interface Props {
  x: number;
  y: number;
}

const { map } = useMapEditStore();
const { getCurrentSelectedEditElement } = useEditElementStore();

const props = defineProps<Props>();

function handleClick() {
  getCurrentSelectedEditElement().execute(props);
}
</script>

<style scoped></style>
