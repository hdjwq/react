/**
 * Created by wangdongfang on 17/3/29.
 */
import config from './config'
import axios from 'axios'
import processing from '../module/processing'
const Fenth=(url,type,data)=>{
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
          }).then((response)=>{
              return resolve(response)
          })
            .catch((err)=>{
              return resolve(err)
            })
      })
}
let request={};
config.map(({name,url,type})=>{
<<<<<<< HEAD
     request[name]=(data)=>{
         return Fenth(url,type,data)
     }
=======
     request[name]=()=>{return Fenth(url,type)}
>>>>>>> fcf37b561fdef880ce97c0f62d2eb4b75b284638
})
export default request