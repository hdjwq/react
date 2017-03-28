/**
 * Created by dongjiehe on 2017/3/28.
 */
import React,{Component,PropTypes} from 'react'
import cn from 'classnames'
import './index.less'
const nav=['主页','产品','我的'];
class Index extends Component{
    static PropTypes={
         nodeArry:PropTypes.array,
        navClick:PropTypes.func
    };
    static defaultProps={
        nodeArry:nav,
        navClick:()=>{}
    };
    navClick=(index)=>{
        this.props.navClick(index)
    }
    render(){
        const {nodeArry}=this.props;
        return(<div className={cn('navRow','navBottom')}>
            {nodeArry.map((item,i)=>(<div key={i} onClick={()=>{this.navClick(i)}} className="navBox">{item}</div>))}
        </div>)
    }
}
export default Index