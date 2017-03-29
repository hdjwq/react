/**
 * Created by dongjiehe on 2017/3/27.
 */
import {Index,Active} from './component';
const home=[{
    path:'/',
    exact:true,
    component:Index,
},{
    path:'/home',
    exact:true,
    component:Index
},{
    path:'/product',
    exact:true,
    component:Index
},{
    path:'/mine',
    exact:true,
    component:Index
}];
const active=[{
    path:'/active/:id',
    exact:true,
    component:Active
}]
export {home,active}