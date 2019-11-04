import Vue from 'vue'//导入vue
import App from './App.vue'//导入 app.vue 主组件
import store from "./store";
import './registerServiceWorker'
import router from './router'//导入路由  也可以写 router.js

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


// 引用API文件
import api from './api/http.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false
//将上边的全局变量赋给 vue 实例化，并挂载到 #app上
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
