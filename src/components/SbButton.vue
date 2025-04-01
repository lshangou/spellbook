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
  padding: 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0 3px 6px #00000015;;
  background-image: linear-gradient(109.9deg,  rgba(0,174,182,1) 4.5%, rgba(190,223,224,1) 22.6%, rgba(217,198,225,1) 45.1%, rgba(248,178,54,1) 68.5%, rgba(235,105,17,1) 87.2% );
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Fantasque Sans Mono';
  &:hover {
    filter: brightness(1.05);
    cursor: pointer;
  }
  &:active {
    filter: brightness(0.95);
    box-shadow: none;
    translate: 1px 1px;
  }
}
</style>
