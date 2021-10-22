<template>
  <div class="header">
    <router-link :to="{name:'Home'}"><div class="top">返回首页</div></router-link>
    <div v-if="login">
      <li class="top-last">
        <button class="login"><a href=""> 退出登录 </a></button>
      </li>
      <li class="top-last">
        <button class="login"><a href=""> 个人中心 </a></button>
      </li>
    </div>
    <div v-else>
      <li class="top-last"><button class="login" onclick="">注册</button></li>
      <li class="top-last"><button class="login" onclick="">登录</button></li>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherHeader",
  //props从父组件获取内容
  props: {},
  //返回的data
  data() {
    return {
      login: false,
    };
  },
};
</script>

<style>
/*链接相关样式*/
.header a:link {
  color: white;
} /*默认为白色*/
.header a:visited {
  color: white;
} /*已访问链接 */
.headera:hover {
  color: black;
} /* 鼠标移动到链接上 */
.headera:active {
  color: #0000ff;
} /* 鼠标点击时 */
.headera {
  text-decoration: none;
}
/*头部内容*/
.header {
  margin-top: 0px;
  width: 100%;
  height: 40px;
  background-color: #00ccff; /*水蓝色*/
}
.top {
  float: left;
  margin-top: 10px;
  margin-left: 5%;
}
.top-last {
  margin-top: -4px;
  float: right;
  margin-right: 5px;
}
/* 所有的登录按键 */
.login {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 5px 0;
  border: none;
  cursor: pointer; /**/
  width: 100%;
}
/*浅色*/
.login:hover {
  opacity: 0.8;
}
</style>