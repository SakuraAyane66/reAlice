<template>
  <div>
    <other-header></other-header>
    <!--中间陪衬-->
    <div class="center">
      <li class="center-first">{{ title }}</li>
      <!--搜索栏-->
      <div class="searchbox-last" @click="isGoto">搜索</div>
      <input
        type="text"
        class="search"
        placeholder="请输入关键字"
        v-model="keyword"
      />
    </div>
    <hr />
    <div class="center-left">
      <!-- 细节展示,分两种，一种是普通的，一种是超链接 -->
      <!-- 为普通的 -->
      <div v-if="isUrl == '0'">
        <router-link
          tag="li"
          :to="{ name: 'Detail', query: { db: item.db, id: item.id } }"
          class="li"
          v-for="(item, index) of showLists"
          :key="index"
        >
          {{ item.topic }}
        </router-link>
      </div>
      <!-- 为超链接,两者都是lists -->
      <div v-else>
        <a
          v-for="item of showLists"
          :key="item.id"
          :href="item.hyperlink"
          target="_blank"
        >
          <li class="li">{{ item.topic }}</li>
        </a>
      </div>
      <Pager
        v-if="!dataChanged"
        ref="pager"
        :pageSize="pageSize"
        :curPage="curPage"
        :total="total"
        @setPage="gotoPage"
        @setRowNum="changeRowNum"
      />
    </div>
    <ad-picture></ad-picture>
    <home-bottom></home-bottom>
    <creater-info></creater-info>
  </div>
</template>

<script>
import CreaterInfo from "../home/components/CreaterInfo.vue";
import HomeBottom from "../home/components/HomeBottom.vue";
import OtherHeader from "../home/components/OtherHeader.vue";
import Pager from "../common/Pager.vue";
import AdPicture from "./AdPicture.vue";
import {
  getAnnouncementList,
  getGoodthingsList,
  getPublicconnectList,
  getPublicactivityList,
} from "apis/list"; //引入ajax方法
export default {
  name: "AllLists",
  components: {
    OtherHeader,
    HomeBottom,
    CreaterInfo,
    Pager,
    AdPicture,
  },
  created() {},
  mounted() {},
  activated() {
    this.init();
  },
  props: {
    // isUrl: {
    //   type: Number,
    //   default: 0, //默认为0，为false ，不是url
    // }
  },
  data() {
    return {
      lists: [], //默认为空数组
      isUrl: 0, //默认为0,为false
      title: [], //默认为空
      keyword: "", //seach关键字
      showLists: [], //lists分页展示用数组
      dbNumber: -1, //用于识别调用api接口的（因为home界面只传递了9个List），而这里需要展示全部list
      //前端分页组件，用的别人封装好的
      dataLength: 0, //总共的数据条数
      curPage: 1, //当前页
      total: 0, //总共页数
      pageSize: 18, //每页记录数,默认18条
      dataChanged: false, //前端分页组件data
    };
  },
  methods: {
    init() {
      this.getDatas(); //得到传递的参数
      this.keyword = ""; //重置搜索的keyword
    },
    //拆分code,得到需要的list数据，通过ajax传输
    getListDatas() {
      this.dbNumber = this.$route.params.dbNumber; //得到传递的dbNumber
      if (this.dbNumber == 1) {
        return getAnnouncementList();
      } else if (this.dbNumber == 2) {
        return getPublicconnectList();
      } else if (this.dbNumber == 3) {
        return getGoodthingsList();
      } else if (this.dbNumber == 4) {
        return getPublicactivityList();
      } else {
        //错误
        console.log("出现错误情况");
        return;
      }
    },
    getDatas() {
      this.isUrl = this.$route.params.isUrl;
      this.title =
        this.$route.params.title == null
          ? "全部内容"
          : this.$route.params.title;
      if (
        this.$route.params.dbNumber == null ||
        this.$route.params.dbNumber == ""
      ) {
        return;
      }
      this.getListDatas().then((res) => {
        this.lists = res.data;
        this.dataLength = this.lists.length; //数组长度为数据条数
        this.total = Math.ceil(this.dataLength / this.pageSize); //总页数，总数据条数/每页展示数量
        this.gotoPage(1); //到首页
      });
    },
    isGoto: function () {
      //搜索跳转
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
    //跳转到具体页面
    gotoPage(pageNumber) {
      if (pageNumber < 0 || pageNumber > this.total) {
        this.gotoPage(1);
        return;
      }
      this.curPage = pageNumber; //切换显示的页码
      //对需要显示的数据进行切割拆分
      this.showLists = this.lists.slice(
        (pageNumber - 1) * this.pageSize,
        this.pageSize * pageNumber
      );
    },
    //切换每页显示
    changeRowNum(rowNum) {
      this.pageSize = rowNum; //更改this.pageSize
      this.total = Math.ceil(this.lists.length / this.pageSize); //更新总页数
      //更改pageSize之后需要重新加载Page页面（总页数，当前页显示等等都可能变化）
      this.gotoPage(1); //重新加载
      this.$refs.pager.initPager();
    },
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
li.center-first {
  float: left;
  margin-left: 5%;
  margin-top: 5px;
  font-size: 25px;
  list-style-type: none;
}
.li {
  margin-left: 20px;
  margin-top: 15px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis; /*溢出用省略号*/
  overflow: hidden;
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
.center-left {
  background-color: #f5f5f5;
  border: 2px dotted;
  float: left;
  margin-top: 10px;
  margin-left: 120px;
  height: 630px;
  width: 600px;
}
</style>>
