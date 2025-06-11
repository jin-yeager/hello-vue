<template>
  <div>
    <h2>EMP LIST 화면</h2>
    <table>
      <thead>
      <tr>
        <td>사번</td>
        <td>이름</td>
        <td>전화</td>
        <td>이메일</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="vo in list" :key="vo.e_id">
        <td>
          <a @click="fn_one(vo.e_id)" style="cursor: pointer;">{{ vo.e_id }}</a>
        </td>
        <td>{{ vo.e_name }}</td>
        <td>{{ vo.gen }}</td>
        <td>{{ vo.addr }}</td>
      </tr>
      </tbody>
    </table>
    <input type="button" value="추가" @click="fn_add" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
  name: 'EmpList',
  setup() {
    const router = useRouter()
    const list = ref([
      { e_id: "1", e_name: "1", gen: "1", addr: "1" },
      { e_id: "2", e_name: "2", gen: "2", addr: "2" },
      { e_id: "3", e_name: "3", gen: "3", addr: "3" },
    ])

    const fn_list = async () => {
      try {
        const resp = await axios.get("http://localhost:80/emp_list.ajax")
        list.value = resp.data.list
      } catch (error) {
        console.error('Error fetching list:', error)
      }
    }

    const fn_one = (e_id) => {
      router.push(`/emp_detail.do?e_id=${e_id}`)
    }

    const fn_add = () => {
      router.push('/emp_add.do')
    }

    onMounted(() => {
      fn_list()
    })

    return {
      list,
      fn_one,
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

a {
  color: blue;
  text-decoration: underline;
}
</style>