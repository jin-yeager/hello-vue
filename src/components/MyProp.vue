<script setup>

const props = defineProps({
  alt: String,
  src :String
});
</script>

<template>
  속성:{{alt}}
  <img  v-bind:src="src" />


</template>

<style scoped>

</style>
