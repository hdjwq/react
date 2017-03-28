/**
 * Created by wangdongfang on 17/3/28.
 */
import React,{Component,PropTypes} from 'react'

class Index extends Component{
    static PropTypes={
           active:PropTypes.bool
    }
    static defaultProps={
        active:false
    }
    render(){
       const {children,active}=this.props;
       if (active){
           return(<div>{children}</div>)
       }else {
           return null
       }
    }
}
export default Index