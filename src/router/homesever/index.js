/**
 * Created by dongjiehe on 2017/3/27.
 */
import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import {home} from '../config'
const makeRoute=()=>(
    home.map((item,i)=>(<Route {...item} key={i}/>))
)
export default makeRoute;
