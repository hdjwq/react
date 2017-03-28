/**
 * Created by wangdongfang on 17/3/28.
 */
import React,{Component,PropTypes} from 'react'
import tabOne from '../tabOne'
import '../index.less'
class Index extends Component{
    static PropTypes={
         init:PropTypes.number
    }
    static defaultProps={
         init:0
    }
    constructor(props){
        super(props);
        const {init}=this.props;
        this.state={init}
    }
    getChild=()=>{
        const {children}=this.props,
               Len=children.length;
        let childDom;
        if (Len>1){
            childDom=this.arryChild(children)
        }else {
            childDom=children
        }
        return childDom;
    }
    componentWillReceiveProps(next){
        const {init}=next;
        this.setState({
            init
        })
    }
    arryChild=(children)=>{
        const tabOneArry=[],
              domArry=[],
              Len=children.length,
              {init}=this.state;
        let   tabOneIndex=0;
        children.map((child,i)=>{
            if (child.type==null){
                domArry.push(null)
            }else if (child.type==tabOne){
                if (init==tabOneIndex){
                    tabOneArry.push(React.cloneElement(child,{key:i,active:true}))
                }else {
                    tabOneArry.push(React.cloneElement(child,{key:i,active:false}))
                }
                tabOneIndex++
            }else {
                domArry.push(React.cloneElement(child,{key:i}))
            }
        })
        domArry.push(React.createElement('div',{key:Len},tabOneArry))
        return domArry
    }
    render(){
          return(<div className="tabBody">{this.getChild()}</div>)
      }
}
export default Index
