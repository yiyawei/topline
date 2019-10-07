import Vue from 'vue'
import Router from 'vue-router'
import useElement from './components/useElement'
import Search from './components/search.vue'

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
    }
  ]
})
