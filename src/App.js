import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import Home from './router/homesever'
import Active from './router/activesever'
import reducers from './reducers'
import sagas from './saga/index'
const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware,sagaMiddleware)
)
sagaMiddleware.run(sagas);
class app extends Component{
    render(){
        return(
            <div>
                 {Home()}
                 {Active()}
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
