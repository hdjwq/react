/**
 * Created by wangdongfang on 17/3/29.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import info from '../../actionType/info'
import Loading from '../../module/loading'
class Index extends Component{
    componentDidMount(){
       const {id}=this.props.match.params;
       this.props.getInfo(id)
    }
    loadDom=()=>{
        return(<Loading/>)
    }
    loadEndDom=()=>{
        const {datas}=this.props;
       return(<div>
           {datas.data.name}
       </div>)
    }
    loadErrDom=()=>{
        return (<div>
            加载失败
        </div>)
    }
    render(){
        const {datas,err}=this.props;
        let Dom=this.loadDom();
        if (datas){
            Dom=this.loadEndDom();
        }
        if (err){
            Dom=this.loadErrDom()
        }
        return(<div>{Dom}</div>)
    }
}
const data=(state)=>({
      datas:state.info.getIn([info.GET_ACTIVE,'data']),
      err:state.info.getIn([info.GET_ACTIVE,'err'])
})
const dispatchFn=(dispatch)=>({
      getInfo(id){
          dispatch({
              type:info.GET_ACTIVE,
              parmas:{id}
          })
      }
})
export default connect(data,dispatchFn)(Index)