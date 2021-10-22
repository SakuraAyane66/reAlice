<template>
  <div>
    <footer>
      <div class="bottom-footer">
        <a href="#" >返回顶部</a>
        |
        <a href="#">关于我们</a>
        |
        <a href="#">投稿须知</a>
        |
        <a href="#">网站声明</a>
        |
        <a href="#">联系我们</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeBottom",
  data() {
    return {};
  },
};
</script>

<style>
/*底层相关信息*/
.bottom-footer {
    float: left;
    margin-top: 20px;
    width: 100%;
    height: 30px;
    background-color: gray;
    text-align: center;
  }
  
  .bottom-footer a {
    font-size: 23px;
    padding-left: 20px;
    padding-right: 15px;
    padding-top: 15px;
    /* margin-top: 0px; */
    color: aliceblue;
  }
  .bottom-footer a:hover {
    color: #ff702d;
    text-decoration-line: underline; /*修改为有下划线*/
    text-decoration-style: solid; /*设置为默认*/
    text-decoration-color: currentcolor; /*修改下划线颜色*/
  }

</style>