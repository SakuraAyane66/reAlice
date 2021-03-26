<template>
    <div class="centertwo">
<div class="block">
    <el-carousel trigger="click" height="400px">
      <el-carousel-item v-for="item in urls" :key="item.id">
          <img class="img" :src="item.url" alt="item.id">
      </el-carousel-item>
    </el-carousel>
  </div>
    </div>
</template>

<script>
export default {
  name: "HomeCenter",
  props: {},
  data() {
    return { urls: [{
        id: 0,
        url: 'http://www.skydragon.vip/img/2.jpg'
      }, {
        id: 1,
        url: 'http://www.skydragon.vip/img/16.jpeg'
      }, {
        id: 2,
        url: 'http://www.skydragon.vip/img/14.JPG'
      }
      ]}; 
  },
};
</script>

<style>
.centertwo{
    height: 400px;
    width: 100%;
    background-color: aqua;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .img{
    /*设置图片宽度和浏览器宽度一致*/
    width: 100%;
    height: inherit;
  }
</style>