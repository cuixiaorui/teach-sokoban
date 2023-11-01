<template>
  <div class="absolute" :style="position">
    <img :src="targetImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import targetImg from "../../assets/target.png";
import { usePosition } from "../../composables/usePosition";

interface Props {
  x: number;
  y: number;
}
const props = defineProps<Props>();

const { position } = usePosition(props);
</script>

<style scoped></style>
