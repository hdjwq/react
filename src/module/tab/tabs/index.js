/**
 * Created by wangdongfang on 17/3/28.
 */
import React,{Component,PropTypes} from 'react'
import TabBody from '../tabBody'
import TabPane from '../tabPane'
import '../index.less'
import '../../../style/style.less'
class Index extends Component{
    static PropTypes={
           init:PropTypes.number,
           selectCall:PropTypes.func,
           beforChange:PropTypes.func
    }
    static defaultProps={
        init:0,
        selectCall:()=>{},
        beforChange:()=>{}
    }
    constructor(props){
          super(props)
          const {init}=this.props
          this.state={init}
     }
    getChild(){
        const {children}=this.props;
        let childDom;
        if (children.length>1){
            childDom=this.arryChild(children)
        }else {
            childDom=children;
        }
        return childDom;
    }
    changeSelect=(index)=>{
        console.log(index)
        this.setState({
            init:index
        })
    }
    arryChild=(children)=>{
        const childArry=[];
        const tabPane=[];
        const {init}=this.state;
        let tabPaneIndex=0;
        children.map((child,i)=>{
            if (child==null){
                childArry.push(null)
            }else if (child.type==TabBody){
                 childArry.push(React.cloneElement(child,{key:i,init:init}))
            }else if (child.type==TabPane){
                let isActive=false;
                if (tabPaneIndex==init){
                    isActive=true
                }
                tabPane.push(React.cloneElement(child,{key:i,active:isActive,changeFn:this.changeSelect,Index:tabPaneIndex}))
                tabPaneIndex++
            }
            else {
                childArry.push(React.cloneElement(child,{key:i}))
            }
        })
        const Len=children.length;
        const tabPaneDom=React.createElement('div',{className:'tabBar',key:Len},tabPane);
        childArry.push(tabPaneDom)
        return childArry;
    }
    render(){
        return(
         <div className="tabBox">
             {this.getChild()}
         </div>)
    }
}
export default Index