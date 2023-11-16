<template>
  <div>
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in map[i]">
        <MapBlock :x="j" :y="i"></MapBlock>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapBlock from "./MapBlock.vue";
import { useMapEditStore } from "@/store/edit/mapEdit";

const { map } = useMapEditStore();
</script>

<style scoped></style>
