<script setup>
import {ref} from 'vue'

let mine = ref(".")
let com = ref("..")
let result = ref("...")

const myclick = () => {
	let rnd = Math.random();
	if(rnd>0.5){
		com.value = "홀";
	}else{
		com.value = "짝";
	}
  if(mine.value == com.value){
		result.value = "이김";
	} else {
		result.value = "짐";
	}
}

</script>

<template>
  <table>
      <tbody>
          <tr>
              <td> 나</td>
              <td>
                  <input type="text" v-model="mine" />
              </td>
          </tr>
          <tr>
              <td> 컴</td>
              <td>
                  <input type="text" v-model="com" />
              </td>
          </tr>
          <tr>
              <td> 결과</td>
              <td>
                  <input type="text" v-model="result" />
              </td>
          </tr>
          <tr>

              <td colspan="2">
                  <input type="button" value="게임하기" @click="myclick" />
              </td>
          </tr>

      </tbody>

  </table>

</template>

<style scoped>
    input[type='text']{
        width: 40px;
    }
    table,tr,td{
        border: 1px  solid gainsboro;
    }
</style>
