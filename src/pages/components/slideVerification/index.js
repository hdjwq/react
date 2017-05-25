/**
 * Created by Administrator on 2017/5/25.
 */
import React,{Component} from 'react'
import propTypes from 'prop-types'
import Img from './img/test.png'
class Index extends Component{
    static propTypes={
        imgUrl:propTypes.string,
        centerX:propTypes.number,
        centerY:propTypes.number,
    }
    static defaultProps={
        imgUrl:Img,
        centerX:50,
        centerY:100
    }
     componentDidMount(){
        if (this.can){
            const {imgUrl}=this.props;
            const cxt=this.can.getContext('2d'),
                   img=new Image();
                   img.src=imgUrl;
                   this.cxt=cxt;
                   img.onload=()=>{
                         const height=200/(img.width/img.height);
                          this.drawImage(img,200,height);
                          this.square();
                   }
        }
     }
    canEnd=(e)=>{
        this.can=e;
    }
    drawImage=(img,width,height)=>{
         const {can,cxt}=this;
              can.width=width;
              can.height=height;
              cxt.drawImage(img,0,0,width,height)
    }
    square=()=>{
         const {centerX,centerY}=this.props
        var pageX=centerX-20;
        var pageY=centerY-20;
        this.cxt.clearRect(pageX,pageY,40,40)
    }
    render(){
           return(<div>
              <canvas ref={this.canEnd}></canvas>
           </div>)
    }
}

export default Index