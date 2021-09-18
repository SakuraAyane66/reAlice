import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/common/Login'
import HomeHeader from '@/pages/home/components/Header'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'kkk',
      component: HomeHeader
    },
    {
      path: '/xxx',
      name: 'xxx',
      component: Login
    }
  ]
})
