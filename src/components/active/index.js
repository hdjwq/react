/**
 * Created by wangdongfang on 17/3/29.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'

class Index extends Component{
    render(){
        const {datas}=this.props;
        return(<div>fsafasfa</div>)
    }
}
const data=(state)=>({
      datas:state.active.getIn(['name'])
})
const dispatchFn=(dispatch)=>({

})
export default connect(data,dispatchFn)(Index)