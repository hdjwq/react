/**
 * Created by Administrator on 2017/5/3.
 */
import React from 'react'
import RouteComponent from './pages/route/index'
import {BrowserRouter as Router,Route,MemoryRouter,Redirect} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Animation from './pages/components/animation/index'
import combineReducers from './reducer/index'
const store=createStore(combineReducers)
const App=()=>(
    <Provider store={store}>
    <Router >
        {/*<MemoryRouter initialEntries={[ '/', '/home']}>*/}
         <Route render={(props)=>{
             return(<Animation {...props}>
                 <Route
                     {...props}
                     key={props.location.key}
                     path="/"
                     component={RouteComponent}
                 />
             </Animation>)
         }}/>
        {/*</MemoryRouter>*/}
    </Router>
    </Provider>
)
export default App