<template>
  <div>
    <h3>元素选择区</h3>

    <div class="flex space-x-2 m-2">
      <h4>地图:</h4>
      <EditElement :edit-element="wallEditElement"></EditElement>
      <EditElement :edit-element="floorEditElement"></EditElement>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditElement from "./EditElement.vue";
import { wallEditElement, floorEditElement } from "@/store/edit/editElement";
</script>

<style scoped></style>
