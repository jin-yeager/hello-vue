<script setup>
import { ref } from 'vue'


// ref를 써서 연결시켜야 한다...
const dan = ref('')
const outText = ref('')

function gugu(d) {
  let text = ''
  for (let i = 1; i <= 9; i++) {
    text += `${d} x ${i} = ${d * i}\n`
  }
  return text
}

function printGugu() {
  outText.value = gugu(dan.value)
}
</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>출력단수</td>
      <td>
        <!-- 1) bind:value -->
        <input type="text" v-model="dan" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <!-- 2) on:click -->
        <button @click="printGugu">출력하기</button>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <!-- 3) outText 출력 -->
        <textarea rows="9" cols="20" readonly>{{ outText }}</textarea>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>
