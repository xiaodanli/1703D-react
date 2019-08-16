/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 14:36:58 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-16 09:46:18
 */

import React,{Component} from 'react'
import {connect} from 'react-redux'

class Create extends Component{
    render(){
        return <div>{this.props.detail.goods_name}  x {this.props.detail.sold_count}</div>
    }   
}

export default connect(state => {
    return {
        detail:state.order.detail
    }
})(Create)