/**
 * Created by wangdongfang on 17/4/6.
 */
import {takeLatest} from 'redux-saga'
import {call,put} from 'redux-saga/effects'
import info from '../actionType/info'
import indexAction from '../actionType/index'
import reqMap from '../request/fenth'
const takeReq=function* (action) {
      const key=action.type;
      const {INFO_START,INFO_END,INFO_ERR}=indexAction;
      yield put({
          type:INFO_START,
          key:key
      });
      const params=action.params&&action.params||{};
      const response = yield call(reqMap[key],params);
      if (response.hasOwnProperty('status')){
         if (response.status==200&&response.data.code==200){
             yield put({
                 type:INFO_END,
                 key:key,
                 data:response.data
             })
         }else {
             yield put({
                 type:INFO_ERR,
                 key:key,
             })
         }
      }else if (response.hasOwnProperty('message')){
          if (response.message=='取消'){
              yield put({
                  type:INFO_END,
                  key:key,
                  data:'请求取消'
              })
          }
      }
      else {
          yield put({
              type:INFO_ERR,
              key:key,
          })
      }
}
export default function* (){
     yield takeLatest(Object.keys(info),takeReq)
}