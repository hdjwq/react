/**
 * Created by dongjiehe on 2017/3/26.
 */
import React,{Component} from 'react'
import {Route,NavLink} from 'react-router-dom'
import Test from '../test/index'
import Bottom from '../../module/nav/bottom'
import cn from 'classnames'
import '../../style/style.less'

class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:['主页','产品','我的'],
            url:['/','/product','/mine']
        }
    }
    navDom=()=>{
        const DomArry=[],
              {name,url}=this.state;
        name.map((item,i)=>{
            DomArry.push(<NavLink to={url[i]} key={i} className={cn('link','barLine')} activeClassName='activeBarText'>{item}</NavLink>)
        });
        return DomArry
    }
    render(){
        return(<div>
            <Bottom nodeArry={this.navDom()}/>
        </div>)
    }
}
export default Index