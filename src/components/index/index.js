/**
 * Created by dongjiehe on 2017/3/26.
 */
import React,{Component} from 'react'
import {Route,NavLink,Redirect} from 'react-router-dom'
import home from '../home/index'
import product from '../product/index'
import mine from '../mine/index'
import Bottom from '../../module/nav/bottom'
import cn from 'classnames'
import '../../style/style.less'
import './index.less'

class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:['主页','产品','我的'],
            url:['/home','/product','/mine']
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
        return(<div className="bg">
              <div className="homeBody">
                <Route path="/" exact render={()=>(<Redirect to="/home"/>)}/>
                <Route path="/home" exact component={home}/>
                  <Route path="/product" exact component={product}/>
                  <Route path="/mine" exact component={mine}/>
              </div>
            <Bottom nodeArry={this.navDom()}/>
        </div>)
    }
}
export default Index