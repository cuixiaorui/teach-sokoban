<template>
  <div @click="handleClick">
    <img :src="editElement.img" />
  </div>
</template>

<script setup lang="ts">
import {
  useEditElementStore,
  type EditElement,
} from "@/store/edit/editElement";

interface Props {
  editElement: EditElement;
}

const { setCurrentSelectedEditElement } = useEditElementStore();

const props = defineProps<Props>();

function handleClick() {
  setCurrentSelectedEditElement(props.editElement);
}
</script>

<style scoped></style>
