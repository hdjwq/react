/**
 * Created by dongjiehe on 2017/3/26.
 */
import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'
import test from '../test/index'
class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            <Link to='/product'>home</Link>
            <Link to='/test1'>test1</Link>
            <Route path='/test1' exact component={test}/>
        </div>)
    }
}
export default Index