<script setup>

import {ref} from 'vue'
import Life01 from "@/components/Life01.vue";
import Life02 from "@/components/Life02.vue";

const flag = ref(true)
const toggle = () => {
  flag.value = !flag.value
}
</script>

<template>
  <div>               <!--  ← 여기서 감싸주면 -->
    <template v-if="flag">
      <Life01/>
      <br/>           <!--  ← 이 줄바꿈이 확실히 먹습니다 -->
    </template>
    <template v-else>
      <Life02/>
      <br/>
    </template>

    <button @click="toggle">toggle</button>
  </div>
</template>


<style>

</style>
