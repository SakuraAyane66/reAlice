<template>
    <!--登录界面主体-->
<div class="modal" v-show="isShow">
    
   <form class="modal-content animate">
    <div class="imgcontainer">
      <span @click="changeNone" class="close" title="Close Modal">
      </span>
      <img :src="imgUrl" alt="登录头像" class="avatar">
    </div>

    <div class="container">
      <label><b>用户名</b></label>
      <input type="text" placeholder="Enter Username" v-model="user" required >
      <label><b>密码</b></label>
      <input type="password" placeholder="Enter Password" v-model="password" required>
      <button class="login" @click="login()">登陆</button>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" @click="changeNone()" class="cancel">返回</button>
      <span class="psw">新用户？<a href="#" @click="changeNone()">注册账号</a></span>
    </div>
  </form>
</div>
</template>

<script>
import imgUrl from "imgs/login.jpg";
import {postUserLogin} from "apis/list";
export default {
    name: "Login",
    //props从父组件获取内容
    props:{
        //是否显示
        isShow:{
            typeof:Boolean,
            default:false
        },
    },
    data(){
        return{
          imgUrl:imgUrl,
          user:"",
          password:""
        };
    },
    methods:{
        //改变显示
        change(){
            this.isShow = !this.isShow
        },
        changeDisplay(){
            this.isShow= true
        },
        changeNone(){
            this.isShow = false
        },
        //发送登录请求
        login(){
            console.log("至少发起了请求！！")
            let data = {
                "username":this.user,
                "clearPassword":this.password
            }
            postUserLogin(data)
            .then(res=>{
                //登录逻辑处理
                console.log("res??",res)
            })
            .catch(res=>{
                console.log(res)}
                )
        }
    }
}
</script>

<style scoped>

/* 登录界面默认模版，一般隐藏*/
.modal {
    /*display: none; /* 默认隐藏 */
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
}

.close:hover, .close:focus {
    color: red;
    cursor: pointer;
}
/* 所有的登录按键 */
.login{
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    margin:5px 0;
    border: none;
    cursor: pointer;/**/
    width: 100%;
}
/*浅色*/
.login:hover {
    opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancel {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

/*Center the image and position the close button */
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}
/*登录界面头像*/
img.avatar {
	width:200px;
	height:200px;
    /*width: 20%;*/
    border-radius: 50%;/*圆角边框*/
}

.container {
    padding: 16px;
}

	/* Full-width input fields */
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
span.psw {
    float: right;
    padding-top: 16px;
}
</style>