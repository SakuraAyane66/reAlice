<template>
  <div>
    <div class="center-left-top" id="center-center">
      <div class="more"><a @click="goToMore">更多</a></div>
      <h2 class="h2">{{ title }}</h2>
      <hr class="hr" />
      <!-- vue单页面内跳转用路由 -->
      <ul>
        <!-- <router-link tag="li" :to="'/xianshi/'+'db='+item.db+'&id='+item.id" class="li" v-for="item of list" :key="item.id"> -->
        <router-link
          tag="li"
          :to="{ name: 'Detail', query: { db: item.db, id: item.id } }"
          class="li"
          v-for="item of list"
          :key="item.id"
        >
          {{ item.topic }}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCube",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    list: {
      type: Array,
      default: [
        "内容1",
        "内容2",
        "内容3",
        "内容4",
        "内容5",
        "内容6",
        "内容7",
        "内容8",
        "内容9",
      ],
    },
    urls: {
      type: Array,
      default: ["#"],
    },
    listurl: {
      type: String,
      default: "#",
    },
    dbNumber:{  //后续添加用于识别种类的
      type:Number,
      default: -1,
    }
  },
  data() {
    return {};
  },
  //创建执行的函数
  created() {},
  //写的函数
  methods: {
    // getMsg() {
    //   console.log("从父组件传递来的值是", this.msg);
    // },
    // getList() {
    //   console.log("从父组件传递来的list值是", this.list);
    // },
    goToMore() {
      this.$router.push({
        name: "AllLists",
        params: {
          dbNumber: this.dbNumber,
          isUrl: 0 ,  //0代表false不是url'
          title: this.title, //传入对应标题
        },
      });
    }, //跳转到更多的页面
  },
};
</script>

<style>
.h2 {
  text-align: center;
  font-size: 25px;
}
.center-left-top {
  float: left;
  margin-left: 0px;
  margin-top: 0px;
  background-color: #f5f5f5;
  width: 98%;
  height: 330px;
  border: 2px groove;
  border-top-color: red;
  overflow: hidden;
  text-overflow: ellipsis;
}
.more {
  float: right;
  margin-right: 0px;
  margin-top: 25px;
  font-size: 18px;
  text-align: center;
}
.more a {
  color: black;
}
.more a:hover {
  color: #ff702d;
  /* text-decoration-line: underline; 修改为有下划线 */
  text-decoration-style: solid; /*设置为默认*/
  text-decoration-color: currentcolor; /*修改下划线颜色*/
}
.hr {
  margin-top: 23px;
}
.li {
  margin-left: 20px;
  margin-top: 15px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis; /*溢出用省略号*/
  overflow: hidden;
}
</style>
