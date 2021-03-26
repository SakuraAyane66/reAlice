<template>
  <div class="center-top">
    <img :src="imgUrl" alt="图片" />
    <h1 style="text-align: center">头条内容</h1>
  </div>
</template>

<script>
import imgUrl from "imgs/4.png";
export default {
  name: "HomeHeadlines",
  //props从父组件获取内容
  props: {},
  //返回的data
  data() {
    return {
      imgUrl: imgUrl, //赋值给data的imgurl
    };
  },
};
</script>

<style>
/* @import "~imgs/4.png"; */
h1 {
  color: red;
  /* margin-top: 10px; */
  font-size: 30px;
}
.center-top {
  margin-top: 10px;
  height: 180px;
  /* background:url("imgs/4.png") no-repeat; */
  background-size: 130px 130px;
  background-color: #f5f5f5;
  border: 2px solid red;
}
</style>
