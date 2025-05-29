<template>
  <p>속성: {{ alt }}</p>
</template>

<script setup>
const props = defineProps({
  alt: String
})
</script>