<template>
  <div>
    <h2>EMP DETAIL 화면</h2>
    <table>
      <tbody>
      <tr>
        <td>사번</td>
        <td>{{ vo.e_id }}</td>
      </tr>
      <tr>
        <td>이름</td>
        <td>{{ vo.e_name }}</td>
      </tr>
      <tr>
        <td>전화</td>
        <td>{{ vo.gen }}</td>
      </tr>
      <tr>
        <td>이메일</td>
        <td>{{ vo.addr }}</td>
      </tr>
      <tr>
        <td colspan="2">
          <input type="button" value="수정" @click="fn_mod" />
          <input type="button" value="삭제" @click="fn_del" />
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
  name: 'EmpDetail',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const vo = ref({ e_id: ".", e_name: "", gen: "", addr: "" })

    const loadDetail = async () => {
      const pe_id = route.query.e_id
      try {
        const resp = await axios.get("http://localhost:80/emp_detail.ajax", {
          params: { e_id: pe_id }
        })
        vo.value = resp.data.vo
      } catch (error) {
        console.error('Error fetching detail:', error)
      }
    }

    const fn_mod = () => {
      router.push(`/emp_mod.do?e_id=${vo.value.e_id}`)
    }

    const fn_del = async () => {
      const flag_c = confirm(
          "한번 지워진 데이터는 복구불가합니다.\n삭제하시렵니까?"
      )
      if (!flag_c) return

      try {
        const resp = await axios.post("http://localhost:80/emp_del.ajax", vo.value)
        const cnt = resp.data.cnt
        if (cnt == 1) {
          alert("정상적으로 삭제되었습니다.")
          router.push('/emp_list.do')
        } else {
          alert("삭제도중 문제가 생겼습니다.")
        }
      } catch (error) {
        console.error('Error deleting:', error)
        alert("삭제도중 문제가 생겼습니다.")
      }
    }

    onMounted(() => {
      loadDetail()
    })

    return {
      vo,
      fn_mod,
      fn_del
    }
  }
}
</script>

<style scoped>
table, tr, td {
  border: 1px solid darkolivegreen;
  text-align: center;
}
</style>