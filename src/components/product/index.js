/**
 * Created by dongjiehe on 2017/3/26.
 */
import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'
class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div><Link to={{pathname:'/',state:{hdj:'24'}}}>product</Link></div>)
    }
}
export default Index