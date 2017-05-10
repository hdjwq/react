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
        setTimeout(()=>{
            a++;
            const {listArry}=this.state;
            listArry.push(a)
            this.setState({
                listArry
            })
        },5000)
    }
    render(){
        const {listArry,flage}=this.state;
        return(<div>
            我是主页
            {listArry.map((item,i)=>(
                <div key={i} className={cns('list')}>{item}</div>
            ))}
        </div>)
    }
}
export default Index