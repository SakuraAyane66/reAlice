import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/common/Login'
import HomeHeader from '@/pages/home/components/Header'
import Detail from '@/pages/common/Detail'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/xxx',
      name: 'xxx',
      component: Login
    },
    {
      path: '/xianshi',
      name: 'Detail',
      component: Detail
    }
  ]
})
