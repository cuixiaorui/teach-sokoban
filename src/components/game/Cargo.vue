<template>
  <div class="absolute" :style="position">
    <img :src="cargoImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
import { usePosition } from "../../composables/usePosition";

interface Props {
  x: number;
  y: number;
}
const props = defineProps<Props>();

const { position } = usePosition(props);
</script>

<style scoped></style>
