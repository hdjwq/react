/**
 * Created by dongjiehe on 2017/3/26.
 */
import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Test from '../test/index'
import {Tabs,TabBody,TabOne,TabPane} from '../../module/tab'

import '../../style/style.less'
class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            <Tabs>
             <TabBody>
                <TabOne>
                    <Test/>
                </TabOne>
                 <TabOne>
                     <div>第二</div>
                 </TabOne>
             </TabBody>
                <TabPane>
                 <div className='barText'>
                   主页
                 </div>
                </TabPane>
                <TabPane>
                    <div className='barText'>
                        理财
                    </div>
                </TabPane>
            </Tabs>
        </div>)
    }
}
export default Index