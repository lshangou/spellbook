<template>
  <button>
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
}>();
</script>

<style scoped>
button {
  background-color: red;
  color: black;
}
</style>