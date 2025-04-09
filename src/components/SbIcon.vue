<template>
  <div v-html="feather.icons[icon].toSvg({'stroke-width': strokeWidth, width: size, height: size, color: color})"></div>
</template>
<script setup lang="ts">
import feather from 'feather-icons';

withDefaults(defineProps<{
  icon?: keyof typeof feather.icons;
  size?: number;
  strokeWidth?: number;
  color?: string;
}>(), {
  color: '#000',
  icon: 'x',
  size: 24,
  strokeWidth: 2
});
</script>

<style>
svg {
  width: 300px;
}
</style>
