/**
 * Created by wangdongfang on 17/3/29.
 */
/**
 * Created by dongjiehe on 2017/3/26.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import list from '../../actionType/list'
import Loading from '../../module/loading'
import '../../style/style.less'
import './index.less'
const {MOVIE}=list;
class Index extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    this.props.getList()
    }
    loadDom=()=>{
        return <Loading/>
    }
    loadEndDom=()=>{
        const {listData,history:{push}}=this.props;
        return(<ul className="imgUl">
            {listData.map((item,i)=>{
                const {url,title,text}=item;
                return(<li className="moveLi" key={i}>
                    <img src={url} className="movieImg"/>
                    <div className="movieText">
                        <h3 className="movieTitle">{title}</h3>
                        <div className="moviejs">
                            {text}
                        </div>
                    </div>
                </li>)
            })}
        </ul>)
    }
    render(){
        const {listData}=this.props;
        let Dom=this.loadDom();
        if (listData){
            Dom=this.loadEndDom();
        }
        return(<div className="homeBg">
            {Dom}
        </div>)
    }
}
const datas=(state)=>({
      listData:state.list.getIn([MOVIE,'data'])
})
const dispatchFn=(dispatch)=>({
      getList(){
          dispatch({
              type:MOVIE
          })
      }
})
export default connect(datas,dispatchFn)(Index);