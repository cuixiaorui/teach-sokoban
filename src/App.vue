<template>
  <div class="bg-red-500">sokoban {{ map }}</div>
</template>

<script setup lang="ts">
import { useMapStore } from "./store/map";

const { map } = useMapStore();
</script>
