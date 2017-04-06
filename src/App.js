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
<<<<<<< HEAD
import createSagaMiddleware from 'redux-saga'
import sagas from './saga/index'
const sagaMiddleware=createSagaMiddleware();
=======
import req from './request/fenth'
import saga from './sagas'
>>>>>>> fcf37b561fdef880ce97c0f62d2eb4b75b284638
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
<<<<<<< HEAD
sagaMiddleware.run(sagas);
=======
sagaMiddleware.run(saga)
store.dispatch({type:'TEST',params:'你好'})
store.dispatch({type:'TEST1',params:'我好'})
>>>>>>> fcf37b561fdef880ce97c0f62d2eb4b75b284638
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
