<script setup>
import {ref} from 'vue'

const count = ref("100")

const myclick = () => {
  let c = parseInt(count.value)
  c++
  count.value = c.toString()
}

</script>

<template>
  {{ count }}
  <button type="button" @click="myclick">INCREASE</button>

</template>

<style scoped>

</style>
