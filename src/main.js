// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// import './assets/styles/iconfont.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
// import 'swiper/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueLazyLoad from 'vue-lazyload'
// import echarts from 'echarts'/* 全部引入体积过大，按需引入 */

// Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false
// fastClick.attach(document.body)
// Vue.use(VueAwesomeSwiper /* { default options with global component } */)
// Vue.use(VueLazyLoad, {
//   preLoad: 1.3,
//   error: './static/fail.jpg',
//   loading: './static/loadding.gif'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 路由就是根据网页地址的不同，返回不同的内容给用户