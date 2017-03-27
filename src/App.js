import React,{Component} from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './router/homesever'
import Product from './components/product'
class app extends Component{
    render(){
        const {location}=this.props;
        return(
            <div>
             <Switch>
                 {Home()}
              <Route path='/product' component={Product}/>
             </Switch>
        </div>
            )
    }
}
export default ()=>(
    <BrowserRouter>
        <Route component={app}/>
    </BrowserRouter>
)
