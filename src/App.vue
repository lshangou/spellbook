<template>
  <div>Spellbook Lib</div>
  <sb-button @click="logConsole">Log Console</sb-button>
</template>
<script setup lang="ts">
import SbButton from './components/SbButton.vue'

const logConsole = function () {
  console.log('teste')
}
</script>