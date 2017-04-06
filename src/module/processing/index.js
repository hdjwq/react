/**
 * Created by wangdongfang on 17/4/6.
 */

let processing={};
processing['url']=(url,data)=>{
    let f=0;
    let urlN=url;
     for (let i in data ){
        let str='&'
         if (f==0){
             str='?'
         }
         f++;
         urlN+=str+i+'='+data[i]
     }
    return urlN;
}
export default processing;