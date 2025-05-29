<template>
  <input ref="inputEl" type="text" />
  <button @click="focusInput">FOCUS</button>
</template>

<script setup>
import { ref } from 'vue'

const inputEl = ref(null)

function focusInput() {
  inputEl.value.focus()
}
</script>

<style scoped>

</style>
