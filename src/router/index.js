import Vue from 'vue'
import VueRouter from 'vue-router'// 引用路由
import Home from '../views/Home.vue'//导入方法1 Home页面
import FormVuex from "../views/FormVuex.vue";
import Login from "../views/Login";
import store from "../store";
import Editor from "../views/Editor";
import Content from "../views/Content";
import Home2 from "../views/Home2";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home2',
    name: 'home2',
    component: Home2
  },
  {
    path: "/Content/:id",
    name: "Content",
    component: Content,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: "/Editor",
    name: "Editor",
    component: Editor
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Vuex",
    name: "Vuex",
    component: FormVuex
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

var storeTemp = store;
router.beforeEach((to, from, next) => {
  if (!storeTemp.state.token) {
    storeTemp.commit("saveToken", window.localStorage.Token);
  }
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (storeTemp.state.token) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      //这里使用Id4授权认证，用Jwt，请删之，并把下边的跳转login 打开；
      // applicationUserManager.login();

      //这里使用Jwt登录，如果不用Id4授权认证，这里打开它；
      next({
        path: "/login",
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});

export default router
