<script setup>
import {vo} from '../store.js'

const myup = () => {
  vo.cnt++
}
const mydw = () => {
  vo.cnt--
}
const myyh = () => {
  vo.nm = '영희'
}
const mycs = () => {
  vo.nm = '철수'
}
</script>

<template>
  <div>
    {{ vo.cnt }}, {{ vo.nm }}
    <br />
    <button @click="myup">UP</button>
    <button @click="mydw">DW</button>
    <button @click="myyh">YH</button>
    <button @click="mycs">CS</button>
  </div>
</template>
