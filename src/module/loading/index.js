/**
 * Created by wangdongfang on 17/4/6.
 */
import React,{Component} from 'react'
import './index.less'
class Index extends Component{
    render(){
        return(
            <div className="loading">
            <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
            <p className='loadingText'>加载中...</p>
        </div>
            </div>)
    }
}
export default Index