/**
 * Created by wangdongfang on 17/4/6.
 */
import infoSaga from './info'
import {fork} from 'redux-saga/effects'
const changeFork=(...arrg)=>{
      const forkArrg=[];
       arrg.forEach((i)=>{
           if (Array.isArray(i)){
               i.map((item)=>{
                   forkArrg.push(fork(item))
               })
           }else if (typeof i =='object'){
               Object.keys(i).map((sagas)=>{
                   forkArrg.push(fork(i[sagas]))
               })
           }else {
               forkArrg.push(fork(i))
           }
       });
    return forkArrg;
}
export default function* () {
    yield changeFork(infoSaga)
}