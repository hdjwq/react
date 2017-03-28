/**
 * Created by wangdongfang on 17/3/28.
 */
import React,{Component,PropTypes} from 'react'
import cn from 'classnames'
class Index extends Component{
    static PropTypes={
       className:PropTypes.String,
       activeClassName:PropTypes.String,
        active:PropTypes.bool,
        defaultClassName:PropTypes.String,
        changeFn:PropTypes.func,
        Index:PropTypes.number
    }
    static defaultProps={
        className:'tabPane',
        activeClassName:'activeBarText',
        active:false,
        defaultClassName:'defaultBarText',
        changeFn:()=>{},
        Index:0
    }
    constructor(props){
        super(props)
        const {className,activeClassName,active}=this.props;
        this.state={
            selectClass:active&&activeClassName||className
        }
    }
    componentWillReceiveProps(next){
        const {active,activeClassName,className}=next
        this.setState({
            selectClass:active&&activeClassName||className
        })
    }
    click=()=>{
        const {changeFn,Index}=this.props;
        changeFn(Index)
    }
    render(){
        const {children,className}=this.props,
              {selectClass}=this.state;
        return(<div className={cn(className,selectClass)} onClick={this.click}>
            {children}
        </div>)
    }
}
export default Index