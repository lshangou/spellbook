<template>
  <div class="workbench">
    <sb-playing-card></sb-playing-card>
  </div>
</template>

<script setup lang="ts">
import SbPlayingCard from './components/SbPlayingCard.vue';
</script>

<style>
body {
  background-color: #333;
  margin: 0;
  padding: 0;
}
.workbench {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
