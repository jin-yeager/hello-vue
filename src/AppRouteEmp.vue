<template>
  <div id="app">
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="/about">소개</router-link>
      <router-link to="/emp_list.do">사원관리</router-link>
    </nav>
    <br />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav a {
  margin-right: 10px;
  color: blue;
  text-decoration: underline;
}
</style>