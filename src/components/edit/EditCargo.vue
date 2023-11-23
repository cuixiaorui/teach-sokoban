<template>
  <div class="absolute" :style="position" @dblclick="handleDblclick">
    <img :src="cargoImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
import { STEP_EDIT, usePosition } from "../../composables/usePosition";
import { useEditCargoStore, type EditCargo } from "@/store/edit/editCargo";

interface Props {
  cargo: EditCargo;
}
const props = defineProps<Props>();

const { position } = usePosition(props.cargo, STEP_EDIT);
const { removeCargo } = useEditCargoStore();

function handleDblclick() {
  removeCargo(props.cargo);
}
</script>

<style scoped></style>
