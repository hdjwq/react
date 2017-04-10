/**
 * Created by wangdongfang on 17/4/10.
 */
import {take,call,put,select} from 'redux-saga/effects'
import list from '../../src/actionType/list'
import reqMap from '../../src/request/fenth'
import actionTypes from '../../src/actionType/index'
const {LIST_START,LIST_END,LIST_ERR}=actionTypes;
function* listFn(action) {
     const key=action.type;
           yield put({
               type:LIST_START,
               key
           });
           const page = yield select(state=>state.list.getIn([key,'page'])+1);
     const req=yield call(reqMap[key],{page});
     if (req.hasOwnProperty('status')){
         if (req.status==200&&req.data.code==200){
             yield  put({
                 type:LIST_END,
                 data:req.data.data,
                 key,
                 page
             })
         }
     }else {

     }
}

export default Object.keys(list).map((item)=>{
       return function* () {
            while (true){
                const action=yield take(item);
                yield call(listFn,action);
            }
       }
})