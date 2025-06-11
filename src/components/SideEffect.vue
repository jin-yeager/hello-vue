<script setup>
import { ref, watch } from 'vue'

const count = ref(0);

const myclick = () => {
  count.value++
}

watch(count, async (n, o) => {
  console.log(n, o);
  document.title = `Count is ${n}`;
}, { immediate: true })
</script>

<template>
  SIDE EFFECT<br/>
  {{ count }}
  <button type="button" @click="myclick">CLICK</button>
</template>

<style scoped>
</style>
