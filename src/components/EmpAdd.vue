<template>
  <div>
    <h2>EMP ADD 화면</h2>
    <table>
      <tbody>
      <tr>
        <td>사번</td>
        <td>자동추가</td>
      </tr>
      <tr>
        <td>이름</td>
        <td>
          <input type="text" v-model="vo.e_name" />
        </td>
      </tr>
      <tr>
        <td>전화</td>
        <td>
          <input type="text" v-model="vo.gen" />
        </td>
      </tr>
      <tr>
        <td>이메일</td>
        <td>
          <input type="text" v-model="vo.addr" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <input type="button" value="저장" @click="fn_add" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
  name: 'EmpAdd',
  setup() {
    const router = useRouter()
    const vo = ref({ e_id: "", e_name: "", gen: "", addr: "" })

    const fn_add = async () => {
      try {
        const resp = await axios.post('http://localhost:80/emp_add.ajax', vo.value)
        const cnt = resp.data.cnt
        if (cnt == 1) {
          alert("정상적으로 추가되었습니다.")
          router.push('/emp_list.do')
        } else {
          alert("추가도중 문제가 생겼습니다.")
        }
      } catch (error) {
        console.error('Error adding:', error)
        alert("추가도중 문제가 생겼습니다.")
      }
    }

    return {
      vo,
      fn_add
    }
  }
}
</script>

<style scoped>
table, tr, td {
  border: 1px solid darkolivegreen;
  text-align: center;
}

input[type="text"] {
  width: 50px;
}
</style>