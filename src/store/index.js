import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  //全局状态
  state: {
    //登录状态
    isLogin: false,
    name: "Sakura",
    arr:[],
    obj:{},
    token:"", //登录凭证token
  },
  //状态变更方法，只能在这里调用
  mutations: {
    logOut(state) {
      state.isLogin = false
    },
    logIn(state) {
      state.isLogin = true
    },
    setToken(state,xxx){
      state.token = xxx
    }
  },
  //允许异步执行的代码，ajax，axios
  actions: {

  }
})
export default store
