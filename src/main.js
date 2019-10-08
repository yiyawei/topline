import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
// 导入axios
import Axios from 'axios'
Axios.defaults.baseURL = 'http://ttapi.research.itcast.cn'
Vue.prototype.$axios = Axios
Vue.use(elementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
