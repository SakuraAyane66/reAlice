
//发起请求调用api的list地址，都是从这里调用，方便管理
import {baseGet,basePost,tett} from '../utils/baseRequest'; //引入base请求
import axios from 'axios';
import Qs from 'qs';
//此处还没有进行拦截请求和请求头加token等信息

//网址的地址，方便以后更换
const pre = "http://localhost/";
const ctx = "alice/";

//测试接口
export const postTest = (data) =>basePost(pre+ctx+"test",data);
export const getTest = (data) =>baseGet(pre+ctx+"test",data);
export const Test = (a)=> tett(a);

//用户登录管理相关 ，data是user相关的信息
export const postUserLogin =(data)=> basePost(pre+ctx+"login",data);

//获取各种接口相关内容

//获取首页展示的9条记录
export const getNineAnnouncement = ()=>baseGet(pre+ctx+"getNineAnnouncement")
export const getNineGoodthings = ()=>baseGet(pre+ctx+"getNineGoodthings")
export const getNinePublicconnects = ()=>baseGet(pre+ctx+"getNinePublicconnect")
export const getNincePublicActivitys = ()=>baseGet(pre+ctx+"getNinePublicactivity")

//获取全部内容
export const getAnnouncementList =()=>baseGet(pre+ctx+"getAllAnnouncement");  //获取全部公告
export const getGoodthingsList =()=>baseGet(pre+ctx+"getAllGoodthings"); //获取全部好人好事
export const getPublicconnectList = ()=>baseGet(pre+ctx+"getAll"); //获取全部公益连接
export const getPublicactivityList = ()=>baseGet(pre+ctx+"getAllPublicactivity"); //获取全部公益活动

//获取具体内容，各个topic下面的
export const getAnnouncementDetails = (id)=>basePost(pre+ctx+"getAnnouncementById",id); //db标识1
export const getGoodthingDetails = (id)=>basePost(pre+ctx+"getGoodthingsById",id);      //db标识3
export const getPublicconnectDetails = (id)=>basePost(pre+ctx+"getPubById",id);         //db标识2，但是这个基本上不用，因为超链接
export const getPublicActivityDetails = (id)=>basePost(pre+ctx+"getPublicactivityById",id);  //db标识4

//搜索接口,用于search界面的搜索功能
export const getKeyword  = (keyword) =>basePost(pre+ctx+"getAllKeyword",keyword)

//广告接口,用于展示右边两个的图片,number 是请求多少张图片
// export const getAdImages = (number)=>basePost(pre+ctx+"getImages",number);
export function getAdImages(params) {
    return new Promise((resolve, reject) => {
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        method: "POST",
        url: pre+ctx+"getImages",
        data: Qs.stringify(params),
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  }

//  //获取titlelist，其实不用获取也行..(就在data里面写死了)
//  getTitle(){return null;},
//  //获取公告的内容list,此处没有封装好底层post和get的函数，而且用户的token也没有考虑
//  getAnnouncementList(){
//    axios.get('api地址',{params:{}})
//    .then()
//    .catch(error=>{console.log(error)})
//  },
//  //公益超链接内容
//  getPublicconnectList(){
//     axios.get('api地址',{params:{}})
//    .then()
//    .catch(error=>{console.log(error)})
//  },
//  //好人好事内容
//  getGoodthingsList(){
//     axios.get('api地址',{params:{}})
//    .then()
//    .catch(error=>{console.log(error)})
//  },
//  //活动内容
//  getPublicactivityList(){
//     axios.get('api地址',{params:{}})
//    .then()
//    .catch(error=>{console.log(error)})
//  },