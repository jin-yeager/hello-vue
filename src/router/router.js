import { createRouter, createWebHistory } from 'vue-router'
import EmpList from '../components/EmpList.vue'
import EmpDetail from '../components/EmpDetail.vue'
import EmpAdd from '../components/EmpAdd.vue'
import EmpMod from '../components/EmpMod.vue'
import RouteHome from '../components/RouteHome.vue'
import RouteAbout from '../components/RouteAbout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: RouteHome
    },
    {
        path: '/about',
        name: 'About',
        component: RouteAbout
    },
    {
        path: '/emp_list.do',
        name: 'EmpList',
        component: EmpList
    },
    {
        path: '/emp_detail.do',
        name: 'EmpDetail',
        component: EmpDetail
    },
    {
        path: '/emp_add.do',
        name: 'EmpAdd',
        component: EmpAdd
    },
    {
        path: '/emp_mod.do',
        name: 'EmpMod',
        component: EmpMod
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


