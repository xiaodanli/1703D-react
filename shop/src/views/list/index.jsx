/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 14:36:44 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-16 09:07:27
 */

import React,{Component} from 'react'
import {goodslist} from '@/api/order'

class List extends Component{
    state = {
        goodslist:[]
    }
    render(){
        let {goodslist} = this.state;
        return <div>
            {goodslist.map(item => <div onClick={() => {this.props.history.push(`/detail/${item.goods_id}`)}}>{item.goods_name}</div>)}
        </div>
    }
    componentDidMount(){
        // this.props.match.params.id
        goodslist({store_id:this.props.match.params.id}).then(res => {
            if(res.data.code === 1){
                this.setState({
                    goodslist:res.data.result
                })
            }
            console.log(res)
        })
    }
}

export default List