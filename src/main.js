import Vue from 'vue'//导入vue
import App from './App.vue'//导入 app.vue 主组件
import './registerServiceWorker'
import router from './router'//导入路由  也可以写 router.jssss

Vue.config.productionTip = false
//将上边的全局变量赋给 vue 实例化，并挂载到 #app上
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
