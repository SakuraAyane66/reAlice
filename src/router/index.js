import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/common/Login'
import Create from '@/pages/common/Create'
import Detail from '@/pages/common/Detail'
import Search from '@/pages/search/Search'
import Videos from '@/pages/common/video/Videos'
import LiveHome from '@/pages/liveHome/LiveHome'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/xianshi',
      name: 'Detail',
      component: Detail
    },{
      path: '/Search',
      name: 'Search',
      component: Search
    },{
      path: '/Videos',
      name: 'Videos',
      component: Videos
    },{
      path: '/LiveHome',
      name: 'LiveHome',
      component: LiveHome
    },
  ]
})
