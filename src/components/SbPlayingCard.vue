<template>
  <div class="sb-playing-card">
    Playing Card
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon?: String;
}>();
</script>

<style scoped>
@import '../assets/css/variables.css';

.sb-playing-card {
  background-color: var(--someVar);
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  aspect-ratio: 63/88;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
