import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/common/Login'
import Create from '@/pages/common/Create'
import Detail from '@/pages/common/Detail'
import Search from '@/pages/search/Search'
import Videos from '@/pages/common/video/Videos'
import LiveHome from '@/pages/liveHome/LiveHome'
import AllLists from '@/pages/allLists/AllLists'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home  //主页
    },
    {
      path: '/xianshi',
      name: 'Detail',
      component: Detail //细节页面
    },{
      path: '/Search',
      name: 'Search',
      component: Search //搜索页面
    },{
      path: '/Videos',
      name: 'Videos',
      component: Videos //测试视频展示页面
    },{
      path: '/LiveHome',
      name: 'LiveHome',
      component: LiveHome  //在线聊天室页面
    },{
      path: '/AllLists',
      name: 'AllLists',
      component: AllLists  //所有细节内容页面（更多展示）
    }
  ]
})
