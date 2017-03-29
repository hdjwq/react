/**
 * Created by wangdongfang on 17/3/29.
 */
import {active} from '../config'
import React from 'react'
import {Route} from 'react-router-dom'
export default  ()=>(active.map((item,i)=>(<Route {...item} key={i}></Route>)))