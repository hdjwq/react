/**
 * Created by Administrator on 2017/5/8.
 */
import React,{Component} from 'react'
import cns from 'classnames'
import './index.less'
class Index extends Component{
    state={
        listArry:['1'],
    }
    componentDidMount(){
        this.timeAdd();
    }
    timeAdd=()=>{
        let a=1;
        this.time=setTimeout(()=>{
            a++;
            const {listArry}=this.state;
            listArry.push(a);
            this.setState({
                listArry
            })
        },5000)
    }
    componentWillUnmount(){
        clearTimeout(this.time)
    }
    render(){
        const {listArry}=this.state;
        const {history:{goBack}}=this.props;
        return(<div>
            我是主页
            {/*<div onClick={()=>{goBack()}}>点我返回</div>*/}
            {listArry.map((item,i)=>(
                <div key={i} className={cns('list')}>{item}</div>
            ))}
        </div>)
    }
}
export default Index