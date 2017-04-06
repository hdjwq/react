/**
 * Created by wangdongfang on 17/3/29.
 */
/**
 * Created by dongjiehe on 2017/3/26.
 */
import React,{Component} from 'react'
import Banner from '../../resources/img/home/0.jpeg'
import cn from 'classnames'
import {Link,withRouter} from 'react-router-dom'
import '../../style/style.less'
import './index.less'
class Index extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
       const {push}=this.props.history;
        return(<div className="homeBody">
           <div className="row">
            <div className="banner">
                <img src={Banner}/>
            </div>
           </div>
            <div className={cn('row','bgf')}>
                <ul className="imgUl">
                    <li className="imgUlHead">
                        <Link to={{pathname:'/active/1',state:'中秋活动'}}> 中秋活动</Link>
                    </li>
                    <li className="imgUlHead">
                        <Link to={{pathname:'/active/2',state:'元旦节活动'}}> 元旦节活动</Link>
                    </li>
                </ul>
                <div onClick={()=>{push('/product')}}>点我</div>
            </div>
        </div>)
    }
}
export default withRouter(Index)