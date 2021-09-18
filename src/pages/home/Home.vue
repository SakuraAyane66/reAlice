<template>
  <div>
    <home-header> </home-header>
    <home-headlines></home-headlines>
    <div class="center-left">
      <home-cube :title="titlelist[0]" :list="announcementlist" :urls="urls" :listurl="listurl"></home-cube>
      <div class="xx">xx</div>
      <home-cube :title="titlelist[1]" :list="goodthings" :urls="urls" :listurl="listurl"></home-cube>
    </div>
    <div class="center-center">
      <home-center></home-center>
    </div>
    <div class="center-right">
      <home-pub :title="titlelist[2]" :list="publicconnect" :urls="urls" :listurl="listurl"></home-pub>
      <div class="xx">xx</div>
      <home-cube :title="titlelist[3]" :list="publicactivity" :urls="urls" :listurl="listurl"></home-cube>
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
import HomePub from './components/SmallCubePubc';
import {postTest,getNineAnnouncement,getNineGoodthings,
getNinePublicconnects,getNincePublicActivitys} from 'apis/list'; //引入基本的post和get方法
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeHeadlines,
    HomeCube,
    HomeCenter,
    HomeBottom,
    CreaterInfo,
    HomePub
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
      listurl:"#",
      objData:{username:"sakura"},
      list:[]
    };
  },
  methods:{
    //初始化函数
    init(){
      this.getAnn()
      this.getGoo()
      this.getPubc() //公益连接
      this.getPubl() //公益活动
    }, 
    //获取公告
    getAnn(){
       getNineAnnouncement().then(res=>{
        this.announcementlist = res.data
        }
        ).catch(err=>{console.log(err)})
    },
    //获取公益连接
    getPubc(){
       getNinePublicconnects().then(
         res=>{
           this.publicconnect = res.data
         }
       ).catch(err=>{console.log(err)})
    },
    //获取好人好事
    getGoo(){
       getNineGoodthings().then(res=>{
         this.goodthings = res.data
       }).catch(err=>{console.log(err)})
    },
    //获取公益活动
    getPubl(){
       getNincePublicActivitys().then(res=>{
        this.publicactivity = res.data
       }).catch(err=>{console.log(err)})
    },
    //处理超链接
    getHref(){

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
