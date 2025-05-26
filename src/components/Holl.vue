<script setup>
import { ref } from 'vue'

const mine = ref('')
const com = ref(0)
const result = ref('')

function myclick() {
  if (mine.value !== '홀' && mine.value !== '짝') {
    result.value = '홀 또는 짝을 입력해주세요'
    com.value = 0
    return
  }

  const num = Math.floor(Math.random() * 10) + 1
  com.value = num

  const parity = num % 2 === 0 ? '짝' : '홀'
  result.value = mine.value === parity ? '이겼습니다!' : '졌습니다!'
}
</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>내 선택</td>
      <td>
        <input
            type="text"
            v-model="mine"
            placeholder="홀 또는 짝"
        />
      </td>
    </tr>
    <tr>
      <td>컴퓨터 숫자</td>
      <td>
        <input
            type="number"
            v-model="com"
            readonly
        />
      </td>
    </tr>
    <tr>
      <td>결과</td>
      <td>
        <input
            type="text"
            v-model="result"
            readonly
        />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <button @click="myclick">
          게임하기
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style>
</style>
