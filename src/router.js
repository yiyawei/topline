import Vue from 'vue'
import Router from 'vue-router'
// 导入登录组件
import Login from '@/views/login'
import Home from '@/views/home'
// 导入布局组件
import Layout from '@/views/layout'
import Publish from '@/views/publish'
// 导入文章列表组件
import List from '@/views/aitical/list'
// 导入nprogress
import Nprogress from 'nprogress'
// 导入nprogress的css
import 'nprogress/nprogress.css'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        { path: '/home', component: Home },
        { path: '/publish', component: Publish },
        { path: '/artical/list', component: List }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 开启进度条
  Nprogress.start()
  if (to.path !== '/login') {
    let userInfo = window.localStorage.getItem('userInfo')
    if (!userInfo) {
      router.push('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  Nprogress.done()
})
export default router
