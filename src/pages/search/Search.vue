<template>
  <div>
    <other-header></other-header>
    <!--中间陪衬-->
    <div class="center">
      <li class="center-first">搜索结果</li>
      <!--搜索栏-->
      <div class="searchbox-last" v-on:click="search">搜索</div>
      <input
        type="text"
        class="search"
        placeholder="请输入关键字"
        v-model="keyword"
      />
    </div>
    <hr />
    <div class="search-center">
      <router-link
        tag="li"
        :to="{ name: 'Detail', query: { db: item.db, id: item.id } }"
        class="li"
        v-for="(item, index) of otherItems"
        :key="index"
      >
        {{ item.topic }}
      </router-link>
      <a
        v-for="item of urlItems"
        :key="item.id"
        :href="item.hyperlink"
        target="_blank"
      >
        <li class="li">{{ item.topic }}</li>
      </a>
      <Pager
        v-if="!dataChanged"
        ref="pager"
        :pageSize="pageSize"
        :page="curPage"
        :total="total"
        @setPage="gotoPage"
        @setRowNum="changeRowNum"
      />
    </div>
    <home-bottom></home-bottom>
    <creater-info></creater-info>
  </div>
</template>

<script>
import OtherHeader from "../home/components/OtherHeader.vue";
import HomeBottom from "../home/components/HomeBottom.vue";
import CreaterInfo from "../home/components/CreaterInfo.vue";
import { getKeyword } from "apis/list";
import Pager from "../common/Pager.vue";
export default {
  name: "Search",
  components: {
    OtherHeader,
    HomeBottom,
    CreaterInfo,
    Pager,
  },
  props: {},
  data() {
    return {
      //从服务器返回的搜索结果
      urlItems: [], //超链接
      otherItems: [], //普通文章格式
      keyword: "", //搜索关键词
      //前端分页组件，用的别人封装好的
      dataLength:0, //总共的数据条数
      curPage: 1, //当前页
      total: 0, //总共页数
      pageSize: 20, //每页记录数
      dataChanged: false, //前端分页组件data
      showUrlItems:[], //前端分页展示的超链接内容
      showOtherItems:[] ,//前端分页展示的超链接内容
    };
  },
  methods: {
    init() {
      this.getSearch(this.getUrl());
    },
    //取到url中的keyword
    getUrl: function () {
      //得到url关键词
      let query = this.$route.query;
      let keyword = query.keyword;
      //组件原因，还要更新该组件的data中keyword为传过来的数据
      this.keyword = keyword;
      return keyword;
    },
    //向服务器发起ajax请求
    getSearch(keyword) {
      this.urlItems = {}; //重置data
      this.otherItems = [];
      let getData = []; //接受服务器data的数组,中间过渡用
      let AnnouncementItems = []; //存储临时temp
      let GoodthingsItems = [];
      let PublicactivityItems = [];
      let PublicconnectItems = [];
      let data = { keyword: keyword };
      if (keyword != null && keyword != "") {
        getKeyword(data).then((res) => {
          getData = res.data;
          //赋值temp
          AnnouncementItems = getData[0].Announcement;
          GoodthingsItems = getData[1].Goodthings;
          PublicactivityItems = getData[2].Publicactivity;
          console.log("type?",typeof(getData[3].Publicconnect))
          this.urlItems = getData[3].Publicconnect;
          //循环
          for (let i = 0; i < AnnouncementItems.length; i++) {
            this.otherItems.push(AnnouncementItems[i]);
          }
          for (let i = 0; i < GoodthingsItems.length; i++) {
            this.otherItems.push(GoodthingsItems[i]);
          }
          for (let i = 0; i < PublicactivityItems.length; i++) {
            this.otherItems.push(PublicactivityItems[i]);
          }
          if (
            Object.keys(this.urlItems).length == 0 &&
            this.otherItems.length == 0
          ) {
            //可优化为全局弹窗
            alert("没有搜索到相关内容，请重新输入点什么搜索");
            return;
          }
          //总共数据数量
          this.dataLength = Object.keys(this.urlItems).length+this.otherItems.length
          this.total = Math.ceil(this.dataChanged/this.pageSize)
          this.gotoPage(1) //到首页
        });
      }
    },
    search: function () {
      if (this.keyword != null && this.keyword != "") {
        this.getSearch(this.keyword);
      } else {
        //或者在这里进行升级，改为全局的弹窗警示效果，应该有现成的代码可以复用
        alert("关键词不能为空！");
      }
    },
    //文字分页，不带图片的内容
    gotoPage(pageNumber){
      let m = this.otherItems / this.pageSize ;//得到前m页都是others
      let n = this.otherItems % this.pageSize;//得到余数 ，交换页的前n个是others
      //切换的page在前m页
      if(pageNumber<=m){
        //从otherItems中截取对应的数据放到show里面
        this.showOtherItems = this.otherItems.slice((pageNumber-1)*this.pageSize,this.pageSize*pageNumber);
        this.showUrlItems = [] //不显示urlItems
        return;
      }
      if(pageNumber==(m+1)){
        this.showOtherItems = this.otherItems.slice(m*this.pageSize) //截取剩下的所有内容，小于n
        this.showUrlItems = this.urlItems.slice(0,this.pageSize-n) //不足pagesize的用url补充
      }
      if(pageNumber>m+1){
        //只有urlItems了,
        this.showOtherItems  =[] //展示的为null
        this.showUrlItems = this.otherItems.slice((this.pageSize-n)+(pageNumber-(m+1)-1)*this.pageSize,(this.pageSize-n)+(pageNumber-(m+1))*this.pageSize)
        return;
      }
    },
    changeRowNum(){},
    setPage(){}

  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
/*中间陪衬部分*/
.center {
  margin-top: 5px;
  width: 100%;
  height: 40px;
  background-color: #8e8e8e;
}
.li {
  margin-left: 20px;
  margin-top: 15px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis; /*溢出用省略号*/
  overflow: hidden;
}
.searchbox {
  display: inline;
  float: right;
  font-size: 14px;
  width: 260px;
  margin-top: -5px;
  margin-right: 0px;
  padding: 0;
}
.searchbox-last {
  display: inline;
  width: 78px;
  height: 32px;
  float: right;
  margin-top: 3px;
  margin-right: 0px;
  background: black;
  color: white;
  text-align: center;
  line-height: 30px; /*高度*/
  cursor: pointer; /*移动显示为手*/
}
/*input样式*/
.search {
  display: inline;
  border: 1px solid #e2e2e2;
  height: 30px;
  width: 250px;
  margin-top: 3px;
  float: right;
  padding: 0 0 0 0;
}
.search-center {
  float: left;
  margin-top: 10px;
  margin-left: 25%;
  height: 560px;
  width: 580px;
  background-color: #f5f5f5;
  border: 2px dotted;
}
</style>
