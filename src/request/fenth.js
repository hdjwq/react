/**
 * Created by wangdongfang on 17/3/29.
 */
import config from './config'
const Fenth=(url,type)=>{
      return new Promise((resolve,reject)=>{
          let option={
              credentials:"include",
              method: type || 'GET',
              header:{
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          }
          fetch(url,option)
              .then((res)=>{console.log(res)})
      })
}
let request={};
config.map(({name,url,type})=>{
     request[name]=Fenth(url,type)
})
console.log(request)
export default request