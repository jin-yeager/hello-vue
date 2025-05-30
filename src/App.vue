<script setup>

import {ref} from "vue";
import MyInput from "./components/MyInput.vue";

let obj = ref(null)
let val = ref("hello")

const myclick = () => {
  obj.value.value = "bye"
  val.value = "bye"
}

</script>

<template>
  <input type="text" value="hello" ref="obj"/><br/>
  <MyInput v-bind:value="val"  ref="obj_value" /><br/>
  <button @click="myclick">CHANGE TEXT</button>

</template>

<style scoped>

</style>
