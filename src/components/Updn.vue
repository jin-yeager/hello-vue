<template>
  <table>
    <tbody>
    <tr>
      <td>맞출 수</td>
      <td>
        <input
            type="number"
            v-model.number="guess"
            placeholder="1~99 사이 숫자"
        />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <button @click="onGuess">맞춰보기</button>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <div v-for="(entry) in lines">
          {{ entry.guess }} : {{ entry.msg }}
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ran = ref(0)
const guess = ref('')
const lines = ref([])

onMounted(() => {
  ran.value = Math.floor(Math.random() * 99) + 1
})

function onGuess() {
  const num = Number(guess.value)
  if (!num) {
    alert('숫자를 입력하세요.')
    return
  }

  let text = ''
  if (num === ran.value) {
    text = '정답!'
    alert('정답!')
  } else if (num < ran.value) {
    text = '더 큰 수를 입력하세요.'
  } else {
    text = '더 작은 수를 입력하세요.'
  }

  lines.value.push({ guess: num, msg: text })
  guess.value = ''
}
</script>

<style scoped>
table,tr,td {
  border:1px solid black;
}

</style>
