<script setup>
import {ref} from "vue";

let dan = ref(".")
let txt = ref("..")

const myclick = () => {
  let idan = parseInt(dan.value)

  let _txt = ""

  for (let i = 1; i <= 9; i++) {
    _txt += idan + "*" + i + "=" + (idan * i) + "\n"

  }

  txt.value = _txt
}

</script>

<template>
  <table>
    <tbody>
    <tr>
      <td>출력단수</td>
      <td>
        <input type="text" v-model="dan"/>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" @click="myclick" value="출력하기"/>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <textarea rows="13" cols="17">{{txt}}</textarea>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>
table, tr, td {
  border: 1px solid gray;
}

input[type='text'] {
  width: 40px;
}
</style>
