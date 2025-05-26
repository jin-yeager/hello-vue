<script setup>
import{ ref } from "vue"
const count = ref(+ '100');

const myclick = () =>{

  count.value += 1;

}

</script>

<template>
  {{count}}
  <button type="button" @click="myclick">Increase</button>
</template>

<style scoped>

</style>
