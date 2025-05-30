<script setup>
  import {ref} from "vue";

  let myobj = ref(null)
  const myclick = () => {
    myobj.value.focus()
  }

</script>

<template>
  <input type="text" ref="myobj">
  <button @click="myclick">focus</button>

</template>

<style scoped>

</style>
