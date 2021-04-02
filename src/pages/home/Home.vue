<template>
  <div>
    <home-header> </home-header>
    <home-headlines></home-headlines>
    <div class="center-left">
      <home-cube :title="titlelist[0]" :list="list" :urls="urls" :listurl="listurl"></home-cube>
      <div class="xx">xx</div>
      <home-cube :title="titlelist[1]" :list="list" :urls="urls" :listurl="listurl"></home-cube>
    </div>
    <div class="center-center">
      <home-center></home-center>
    </div>
    <div class="center-right">
<home-cube :title="titlelist[2]" :list="list" :urls="urls" :listurl="listurl"></home-cube>
      <div class="xx">xx</div>
      <home-cube :title="titlelist[3]" :list="list" :urls="urls" :listurl="listurl"></home-cube>
    </div>
    <home-bottom></home-bottom>
    <creater-info></creater-info>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeHeadlines from "./components/Headlines";
import HomeCube from "./components/SmallCube";
import HomeCenter from "./components/HomeCenter";
import HomeBottom from './components/HomeBottom';
import CreaterInfo from './components/CreaterInfo';
import axios from 'axios'; 
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeHeadlines,
    HomeCube,
    HomeCenter,
    HomeBottom,
    CreaterInfo
  },
  data() {
    //参考之前的代码写的逻辑，hhh，重构的难度还是无语呀
    return {
      titlelist: ["公告", "好人好事","公益链接","公益活动"], //title
      announcementlist: [],  //公告集合
      publicconnect:[],      //公益链接集合
      goodthings:[],         //好人好事集合
      publicactivity:[],     //公益活动集合
      urls:["//www.baidu.com","#","#"],
      listurl:"#"
    };
  },
  methods:{
    //初始化函数
    init(){},
    //获取titlelist，其实不用获取也行..(就在data里面写死了)
    getTitle(){return null;},
    //获取公告的内容list,此处没有封装好底层post和get的函数，而且用户的token也没有考虑
    getAnnouncementList(){
      axios.get('api地址',{params:{}})
      .then()
      .catch(error=>{console.log(error)})
    },
    //公益超链接内容
    getPublicconnectList(){
       axios.get('api地址',{params:{}})
      .then()
      .catch(error=>{console.log(error)})
    },
    //好人好事内容
    getGoodthingsList(){
       axios.get('api地址',{params:{}})
      .then()
      .catch(error=>{console.log(error)})
    },
    //活动内容
    getPublicactivityList(){
       axios.get('api地址',{params:{}})
      .then()
      .catch(error=>{console.log(error)})
    }

  },
  mounted(){
      this.init()
  }
};
</script>

<style>
.center-left {
  float: left;
  margin-top: 10px;
  margin-left: 2px;
  height: 681px;
  width: 23%;
  /* background-color: #00ccff; */
}
.center-center{
  float:left;
	margin-left:1%;
	margin-top:10px;
	/* background-color:#00CCFF;	 */
	width:51%;
	height:681px;
	border:1px solid;
}
.center-right{
  float:right;
  margin-top: 10px;
  margin-right: 2px;
  height: 681px;
  width:23%;
  /* background-color: aqua; */
}
.xx{
  color: white;
}
</style>
