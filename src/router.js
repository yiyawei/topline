import Vue from 'vue'
import Router from 'vue-router'
import useElement from '@/components/useElement'
import Search from '@/components/search.vue'
import Login from '@/views/login'
import Layout from '@/components/layout.vue'
import Home from '@/views/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/useElement',
      component: useElement,
      name: 'useElement'
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      directive: '/home'
    },
    {
      path: '/layout',
      component: Layout
    }
  ]
})
