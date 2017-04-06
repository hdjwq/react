/**
 * Created by wangdongfang on 17/4/6.
 */
import Immutable from 'immutable'
const defaultState=Immutable.fromJS({
      data:{},
      pending:false,
      err:false
})
export default (state=defaultState,action)=>{
     switch (action.type){
         case 'INFO_START':
          return state.setIn([action.key,'pending'],true)
         case 'INFO_END':
             return state.withMutations(i=>{
                 i
                     .setIn([action.key,'data'],action.data)
                     .setIn([action.key,'pending'],false)
                     .setIn([action.key,'err'],false)
             })
         case 'INFO_ERR':
             return state.withMutations(i=>{
                 i
                     .setIn([action.key,'data'],action.data)
                     .setIn([action.key,'pending'],false)
                     .setIn([action.key,'err'],true)
             })
         default:
            return state
     }

}