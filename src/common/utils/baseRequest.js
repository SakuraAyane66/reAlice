import axios from 'axios';
import QS from 'qs';
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function baseGet(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function basePost(url, params) {
  // console.log("传入进来的url是：------",url)
  // console.log("传入到基本post里面的data是:-----",params)
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        // console.log("这是基本post封装里面接收到的数据",res)
        //统一处理？
        // if(res.code!=200){
        //     reject(res.msg)
        // }
        resolve(res.data);
      })
      .catch(err => {
        // console.log("这是基本post封装里面的err",err)
        reject(err.data);
      });
  });
}

export function tett(a){
  console.log("我就在里面接受到",a)
}
