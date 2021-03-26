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
<home-cube :title="titlelist[0]" :list="list" :urls="urls" :listurl="listurl"></home-cube>
      <div class="xx">xx</div>
      <home-cube :title="titlelist[1]" :list="list" :urls="urls" :listurl="listurl"></home-cube>
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
    return {
      titlelist: ["公告", "视频"],
      list: ["内很方便", "内容2", "内容3","内容1", "内容2", "内容3","内容1", "内容2", "内容3"],
      urls:["//www.baidu.com","#","#"],
      listurl:"#"
    };
  },
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
