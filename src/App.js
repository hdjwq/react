import React,{Component} from 'react';
import { Switch,Route} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import Home from './router/homesever'
import Active from './router/activesever'
import reducers from './reducers'
import req from './request/fenth'
const history = createHistory();
const middleware = routerMiddleware(history)
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)
console.log(req.test)
class app extends Component{
    render(){
        const {location}=this.props;
        return(
            <div>
             <Switch>
                 {Home()}
                 {Active()}
             </Switch>
        </div>
            )
    }
}
export default ()=>(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <Route component={app}/>
        </ConnectedRouter>
    </Provider>
)
