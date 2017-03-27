/**
 * Created by dongjiehe on 2017/3/27.
 */
import {Home,Product} from './component';
const home=[{
    path:'/',
    exact:true,
    component:Home,
},{
    path:'/test1',
    exact:true,
    component:Home
}];
const product=[{
    path:'/product',
    exact:true,
    component:Product
}]
export {home,product}