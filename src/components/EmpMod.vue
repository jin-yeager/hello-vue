<template>
  <div>
    <h2>EMP MOD 화면</h2>
    <table>
      <tbody>
      <tr>
        <td>사번</td>
        <td>
          <input type="text" v-model="vo.e_id" />
        </td>
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
          <input type="button" value="저장" @click="fn_mod" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {
  name: 'EmpMod',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const vo = ref({ e_id: ".", e_name: "", gen: "", addr: "" })

    const loadDetail = async () => {
      const pe_id = route.query.e_id
      try {
        const resp = await axios.get('http://localhost:80/emp_detail.ajax', {
          params: { e_id: pe_id }
        })
        vo.value = resp.data.vo
      } catch (error) {
        console.error('Error fetching detail:', error)
      }
    }

    const fn_mod = async () => {
      try {
        const resp = await axios.post('http://localhost:80/emp_mod.ajax', vo.value)
        const cnt = resp.data.cnt
        if (cnt == 1) {
          alert("정상적으로 수정되었습니다.")
          router.push('/emp_list.do')
        } else {
          alert("수정도중 문제가 생겼습니다.")
        }
      } catch (error) {
        console.error('Error modifying:', error)
        alert("수정도중 문제가 생겼습니다.")
      }
    }

    onMounted(() => {
      loadDetail()
    })

    return {
      vo,
      fn_mod
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