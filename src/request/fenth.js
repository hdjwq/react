/**
 * Created by wangdongfang on 17/3/29.
 */
import config from './config'
import axios,{CancelToken} from 'axios'
import processing from '../module/processing'
import reqObj from './reqObj'
const Fenth=(url,type,data,name)=>{
      return new Promise((resolve,reject)=>{
          let body='',
              urlN=url;
          if (type=='GET'&&data){
              urlN=processing.url(url,data)
          }else {
              body=data
          }
          axios({
              method: type,
              url: urlN,
              timeout:10000,
              data:body,
              cancelToken: new CancelToken(function executor(c) {
                  reqObj[name] = c;
              })
          }).then((response)=>{
              return resolve(response)
          })
            .catch((err)=>{
              return resolve(err)
            });
      })
}
let request={};
config.map(({name,url,type})=>{
     request[name]=(data)=>{
         return Fenth(url,type,data,name)
     }
})
export default request