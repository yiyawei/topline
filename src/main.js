import Vue from 'vue'
// 导入根组件app.vue
import App from './App.vue'
// 导入router路由
import router from './router'
// 导入状态管理
import store from './store'
// 导入element-ui组件
import elementUI from 'element-ui'
// 导入element-ui的css样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入基础样式
import './assets/css/base.css'
// 导入axios
import Axios from 'axios'
// 导入数值转换组件
import JSONBig from 'json-bigint'
// 设置基地址
Axios.defaults.baseURL = 'http://ttapi.research.itcast.cn'
// axios的transformResponse
Axios.defaults.transformResponse = [
  function (data) {
    try {
      return JSONBig.parse(data)
    } catch (error) {
      return data
    }
  }
]
// axios的请求拦截
Axios.interceptors.request.use(function (config) {
  // config 是请求相关数据
  // config里面有：axios 请求服务器的相关信息：
  //  url:  请求的接口地址
  //  method: 请求的方式
  //  baseUrl: 请求的基准地址
  //  headers: Authorization （token）
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (userInfo) {
    config.headers.Authorization = `Bearer ${userInfo.token}`
  }
  return config
})
// axios的响应拦截
Axios.interceptors.response.use(response => {
  return response.data.data
})
// 把axios设置给Vue的原型中
Vue.prototype.$axios = Axios
// 使用element中间件
Vue.use(elementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
