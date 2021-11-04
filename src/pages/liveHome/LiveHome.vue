<template>
  <div>
    <!-- 聊天内容,无线滚动的div -->
    <div class="messageScreen">
      <!-- 具体聊天内容，在class判断是自己还是别人的信息 -->
      <div
        v-for="(item, index) of data"
        :key="index"
        :class="[item.userId == id ? 'message-row-left' : 'message-row-right']"
      >
        <img :src="defualtAvatar" height="35" width="35" />
        <div>用户：{{ item.userId }}</div>
        <div class="message-body">{{ item.message }}</div>
      </div>

      <br />
    </div>
    <!-- 输入聊天内容的界面 -->
    <input
      v-model="inputMessage"
      type="textarea"
      style="margin: 10px 0"
      placeholder="主动一点，世界会更大！"
      :rows="40"
    />
    <button @click="send">发送信息</button>
    <div class="inputText">
      {{ inputMessage }}
    </div>
  </div>
</template>

<script>
import Videos from "../common/video/Videos.vue";
import imgUrl from "imgs/login.jpg";
export default {
  components: { Videos },
  name: "LiveHome",
  data() {
    return {
      data: [
        // { userId: "sakura", message: "666" },
        // { userId: 22, message: "666" },
      ], //所有的消息实体类
      defualtAvatar: imgUrl, //默认头像地址
      inputMessage: "", //用户输入的消息
      id: -1,
      websocket: "", //websocket对象
      path: "", //websocket连接path
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    //初始程序入口
    init() {
      this.ifSupportWebsocket(); //初始化websocket
    },
    //随机函数
    getRandom() {
      return Math.ceil(Math.random() * 10);
    },
    //websocket相关函数
    //初始化websocket
    ifSupportWebsocket() {
      if (typeof WebSocket === "undefined") {
        alert("Not support websocket");
      } else {
        let x = this.getRandom();
        this.id = x; //同时初始化用户id（随机聊天）
        console.log("随机用户id", x);
        //新建websocket对象
        this.websocket = new WebSocket("ws://localhost/imserver/" + x);
        console.log("支持");
        this.websocket.onopen = this.open;
        this.websocket.onerror = this.error;
        this.websocket.onmessage = this.getMessage;
        this.websocket.onclose = this.close;
      }
    },
    //连接发生错误的回调方法
    error: function () {
      console.log("-----发生了错误");
      this.setMessageInnerHTML("error");
    },
    //连接成功建立的回调方法
    open: function (event) {
      //后期优化提示，xx进入房间
      console.log("连接成功！");
      //   setMessageInnerHTML("open");
    },
    //接收到消息的回调方法，将消息push到data中
    getMessage: function (event) {
      let m = JSON.parse(event.data); //String 转obj
      console.log("回调消息是什么 ============", m);
      if (m.code == "200") {
        this.setMessageInnerHTML(m);
      } else if (m.code == "201") {
        //系统消息,中间操作
        console.log("系统消息", m.message);
      }
    },
    //连接关闭的回调方法
    close: function () {
      //后期优化，xx退出了房间
      console.log("退出");
      //   setMessageInnerHTML("close");
    },
    //关闭连接
    closeWebSocket() {
      this.websocket.close();
    },
    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    //    globalThis.window.onbeforeunload =function(){
    //       websocket.close();
    //   },
    //将消息push进data中
    setMessageInnerHTML(message) {
      this.data.push(message);
    },
    //发送消息
    send() {
      //得到input框消息
      this.websocket.send(this.inputMessage);
    },
  },
  props: {},
};
</script>

<style scoped>
.messageScreen {
  margin-left: 100px;
  margin-top: 150px;
  background-color: #f8f8f6;
  width: 545px;
  height: 350px;
  overflow: auto;
}
.inputText {
  height: 200px;
  width: 200px;
}
.message-row-left {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
}
.message-row-right {
  margin-top: 5px;
  display: flex;
  flex-direction: row-reverse;
}
.message-body {
  border: 1px solid #d9dad9;
  padding: 5px;
  border-radius: 3px;
  background-color: #fff;
}
</style>
