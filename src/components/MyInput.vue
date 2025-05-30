<script setup>
console.log("myinput render")
const props = defineProps({
  val: String
});

</script>

<template>
  <input type="text" v-bind:value="val"/>

</template>

<style scoped>

</style>
