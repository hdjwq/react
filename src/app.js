/**
 * Created by Administrator on 2017/5/3.
 */
import React from 'react'
import RouteComponent from './pages/route/index'
import {BrowserRouter as Router,Route,Link,MemoryRouter} from 'react-router-dom'
import Animation from './pages/components/animation/index'
const App=()=>(
    <Router>
        {/*<MemoryRouter initialEntries={[ '/', '/home']}>*/}
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
        {/*</MemoryRouter>*/}
    </Router>
)
export default App