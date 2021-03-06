
//发起请求调用api的list地址，都是从这里调用，方便管理
import {baseGet,basePost,tett} from '../utils/baseRequest'; //引入base请求
//此处还没有进行拦截请求和请求头加token等信息

//网址的地址，方便以后更换
const pre = "http://localhost:8080/";
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
export const getAnnouncementList =()=>baseGet();  //获取全部公告
export const getGoodthingsList =()=>baseGet(); //获取全部好人好事
export const getPublicconnectList = ()=>baseGet(); //获取全部公益连接
export const getPublicactivityList = ()=>baseGet(); //获取全部公益活动


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