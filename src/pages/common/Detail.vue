<template>
  <div>
    <other-header></other-header>
    <!--中间陪衬-->
    <div class="center">
      <li class="center-first">文章内容</li>
      <!--搜索栏-->
      <div class="searchbox-last" v-on:click="isGoto">搜索</div>
      <input
        type="text"
        class="search"
        placeholder="请输入关键字"
        v-model="keyword"
      />
    </div>
    <hr />

    <!--topic界面-->
    <div id="center-topic">
      <h1>{{ obj.topic }}</h1>
    </div>

    <!--content界面-->
    <div id="center-content">
      <!--作者和时间部分-->
      <p class="buhuan">{{ obj.content }}</p>
      <hr />

      <div id="center-content-bottom">
        <div id="time">
          <p class="buhuan">{{ obj.time }}</p>
        </div>
        <div class="neibu">时间:</div>

        <div id="author">
          <p class="buhuan">{{ obj.author }}</p>
        </div>
        <div class="neibu">作者:</div>
      </div>
    </div>
    <home-bottom></home-bottom>
    <creater-info></creater-info>
  </div>
</template>

<script>
import OtherHeader from "../home/components/OtherHeader.vue";
import HomeBottom from "../home/components/HomeBottom.vue";
import CreaterInfo from "../home/components/CreaterInfo.vue";
import { tsFormat } from "@/common/utils/time/formatTime.js";
import {
  getAnnouncementDetails,
  getGoodthingDetails,
  getPublicActivityDetails,
} from "apis/list";

export default {
  props: {
    //
  },
  components: {
    OtherHeader,
    HomeBottom,
    CreaterInfo,
  },
  name: "Detail",
  data() {
    //具体内容，topic，content，time，author
    return {
      obj: {
        id: "",
        topic: "",
        content: "",
        time: "",
        author: "",
      },
      keyword: "", //seach关键字
    };
  },
  created() {},
  methods: {
    init() {
      this.getUrl();
    },
    getUrl() {
      let query = this.$route.query;
      let db = query.db;
      let id = query.id;
      let data = { id: id };
      switch (db) {
        case "1":
          getAnnouncementDetails(data).then((res) => {
            this.obj = res.data;
            this.obj.time = tsFormat(this.obj.time);
          });
          break;
        case 1:
          getAnnouncementDetails(data).then((res) => {
            this.obj = res.data;
            this.obj.time = tsFormat(this.obj.time);
          });
          break;
        case "3":
          getGoodthingDetails(data).then((res) => {
            this.obj = res.data;
          });
          break;
        case 3:
          getGoodthingDetails(data).then((res) => {
            this.obj = res.data;
          });
          break;
        case "4":
          getPublicActivityDetails(data).then((res) => {
            this.obj = res.data;
          });
          break;
        case 4:
          getPublicActivityDetails(data).then((res) => {
            this.obj = res.data;
          });
          break;
        default:
          console.log("其他，不执行任何操作");
          break;
      }
    },
    isGoto:function() {
      console.log("dd")
      if (this.keyword != null && this.keyword != "") {
        this.$router.push({
          path: "/Search",
          query: {
            keyword: this.keyword,
          },
        });
      } else {
        //或者在这里进行升级，改为全局的弹窗警示效果，应该有现成的代码可以复用
        alert("关键词不能为空！");
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
/*横向div*/
.div-inline {
  display: inline;
}
p.buhuan {
  display: inline;
}
/*中间陪衬部分*/
.center {
  margin-top: 5px;
  width: 100%;
  height: 40px;
  background-color: #8e8e8e;
}
li.center-first {
  float: left;
  margin-left: 5%;
  margin-top: 5px;
  font-size: 25px;
  list-style-type: none;
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
h1 {
  text-align: center;
  color: red;
  font-size: 30px;
}
/*中间内容*/
#center-topic {
  margin-top: 10px;
  height: 50px;
  width: 100%;
  background-color: #f5f5f5;
}
/*中间内容*/
#center-content {
  float: left;
  margin-top: 10px;
  margin-left: 25%;
  height: 580px;
  width: 660px;
  background-color: #f5f5f5;
  border: 2px solid;
  font-size: 20px;
  text-indent: 2em; /*文章空格*/
}
/*作者和时间*/
#center-content-bottom {
  width: 98%;
  margin-left: 15px;
  height: 50px;
}
.last {
  float: right;
  margin-top: 1px;
  margin-right: 0px;
}
/*作者*/
#author {
  float: right;
  margin-top: 10px;
  margin-right: 5px;
  height: 30px;
  width: 30%;
  font-size: 0.8em;
  text-align: left;
}
/*时间*/
#time {
  float: right;
  margin-top: 10px;
  margin-right: 0px;
  height: 30px;
  width: 30%;
  font-size: 0.8em;
  text-align: left;
}
.neibu {
  float: right;
  margin-top: 10px;
  font-size: 0.8em;
  margin-right: 0px;
  text-align: right;
  height: 30px;
  width: 80px;
}
</style>
