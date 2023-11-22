<template>
  <div>
    <div class="flex">
      <div class="w-4/6 bg-pink-400">
        <MapEdit></MapEdit>
        <EditPlayer></EditPlayer>
      </div>
      <div>数据展示区</div>
    </div>
    <div><EditElementView></EditElementView></div>
  </div>
</template>

<script setup lang="ts">
import MapEdit from "@/components/edit/MapEdit.vue";
import EditElementView from "@/components/edit/EditElementView.vue";
import EditPlayer from "@/components/edit/EditPlayer.vue";
</script>

<style scoped></style>
