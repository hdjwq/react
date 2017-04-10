/**
 * Created by wangdongfang on 17/4/10.
 */
import Immutable from 'immutable'
import actionType from '../actionType/index'
const {LIST_START,LIST_END,LIST_ERR}=actionType;
const defaultState=Immutable.fromJS({
      data:[],
     pending:true,
     page:0,
     err:false,
     pageEnd:false
})
export default (state=defaultState,action)=>{
      switch (action.type){
          case LIST_START:
           if (state.has(action.key)){
               return state.setIn([action.key,'pending'],true)
           }else {
               return state.set(action.key,defaultState);
           }
          case LIST_END:
             if (action.data.length==0){
                   return state.setIn([action.key,'pageEnd'],true)
             }else {
                 return state.withMutations(i=>i
                     .updateIn([action.key,'data'],list=>list.concat(action.data))
                     .setIn([action.key,'page'],action.page)
                     .setIn([action.key,'pending'],false)
                 )
             }
          case LIST_ERR:
              return state.setIn([action.key,'err'],true)
          default:
              return state;
      }
}