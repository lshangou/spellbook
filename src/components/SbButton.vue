<template>
  <button @click="handleClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
}>();
const handleClick = function () {
  console.log('click!');
}
</script>

<style scoped>
button {
  background-color: red;
  color: black;
}
</style>
