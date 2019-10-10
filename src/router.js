import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'
import Publish from '@/views/publish'
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
        { path: '/publish', component: Publish }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
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
export default router
