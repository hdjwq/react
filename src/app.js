/**
 * Created by Administrator on 2017/5/3.
 */
import React from 'react'
import RouteComponent from './pages/route/index'
import {BrowserRouter as Router} from 'react-router-dom'
const App=()=>(
    <Router>
        <RouteComponent/>
    </Router>
)
export default App