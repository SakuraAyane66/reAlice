<template>
  <div>
    <div class="center-left-top">
      <div class="more"><a :href="listurl">更多</a></div>
      <h2 class="h2">{{ title }}</h2>
      <hr class="hr" />
      <!-- vue单页面内跳转用路由 -->
      <ul id="tt">
        <!-- <router-link tag="li" :to="item.hyperlink" class="li" v-for="item of list" :key="item.id">
            {{ item.topic }}
        </router-link> -->
        <a v-for="item of list" :key="item.id" :href="item.hyperlink" target="_blank">
            <li class="li">{{ item.topic }}</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePub",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    list: {
      type: Array,
      default: ["内容1", "内容2", "内容3","内容4", "内容5", "内容6","内容7", "内容8", "内容9"],
    },
    urls: {
      type: Array,
      default: ["#"],
    },
    listurl: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {};
  },
  //创建执行的函数
  created() {},
  //写的函数
  methods: {
    getMsg() {
      console.log("从父组件传递来的值是", this.msg);
    },
    getList(){
      console.log("从父组件传递来的list值是",this.list)
    }
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
  color: black;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis; /*溢出用省略号*/
  overflow: hidden;
}
/* #tt a:hover{
  color:#00CCFF;
  font-size: 200%;
  /*text-decoration-line: underline;/*修改为有下划线
} */
</style>