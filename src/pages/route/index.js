/**
 * Created by Administrator on 2017/5/3.
 */
import React,{Component} from 'react'
import homeIndex from '../home/index/index'
import product from 'bundle-loader?lazy!../product/index'
import {Route} from 'react-router-dom'
import Bundle from '../bundle'
const Product=(props)=>(
    <Bundle load={product}>
        {(Product)=><Product {...props}/>}
    </Bundle>
)
var i=1
  i=i++;
console.log(i)
const route=[{
    path:'/',
    exact:true,
    component:homeIndex
},{
    path:'/home',
    exact:true,
    component:homeIndex
},{
    path:'/product',
    exact:true,
    component:homeIndex
},{
    path:'/find',
    exact:true,
    component:homeIndex
},{
    path:'/mine',
    exact:true,
    component:homeIndex
},{
    path:'/productList',
    exact:true,
    component:Product
}];
class RouteComponent extends Component{
    render(){
        return(<div>
            {route.map((route,i)=>(
                <Route {...route} key={i} />
            ))}
        </div>)
    }
}
export default RouteComponent