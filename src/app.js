/**
 * Created by Administrator on 2017/5/3.
 */
import React from 'react'
import RouteComponent from './pages/route/index'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Animation from './pages/components/animation/index'
const App=()=>(
    <Router>
         <Route render={(props)=>(
             <Animation>
                 <Route
                     {...props}
                     key={props.location.key}
                     path="/"
                     component={RouteComponent}
                 />
             </Animation>
         )}/>
    </Router>
)
export default App