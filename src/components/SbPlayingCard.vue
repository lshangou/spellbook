<template>
  <div class="sb-playing-card">
    <sb-icon icon="box" color="#333" :stroke-width="1" :size="64"/>
  </div>
</template>

<script setup lang="ts">
import SbIcon from './SbIcon.vue';

defineProps<{
  icon?: String;
}>();
</script>

<style scoped>
@import '../assets/css/variables.css';

.sb-playing-card {
  background-color: #cccccc73;
  outline: 2px solid #077507;
  outline-offset: -5px;
  border-radius: 8px;
  width: 120px;
  padding: 16px;
  text-align: center;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s ease-in-out;
  aspect-ratio: 63/88;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.08);
  }
}
</style>
