import Vue from 'vue'
import VueRouter from 'vue-router'// 引用路由
import Home from '../views/Home.vue'//导入方法1 Home页面

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',//路径
    name: 'about',//名称
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')//方式二
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
