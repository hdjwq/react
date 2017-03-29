/**
 * Created by wangdongfang on 17/3/29.
 */
import Immutable from 'immutable';
const defaultState=Immutable.fromJS({
      name:'',
      id:0
})
export default (state=defaultState,action)=>{
     switch (action.type){
         case 'ACTIVE':
           return state.withMutations(i=>{
             i
                 .setIn(['name'],action.name)
                 .setIn(['id'],action.id)
           })
         default:
             return state;
     }
}