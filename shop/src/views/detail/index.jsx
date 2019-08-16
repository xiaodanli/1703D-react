/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 14:36:50 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-16 09:42:25
 */

import React,{Component} from 'react'
import {detail} from '@/api/order'
import {DETAIL} from '@/store/order/order-type'
import {connect} from 'react-redux'

class Detail extends Component{
    state = {
        detail:{}
    }
    render(){
        let {detail} = this.state;
        return <div>
            {detail.goods_name}
            <div>
                <span onClick={() => {this.count('-')}}>-</span>
                <span>{detail.sold_count ? detail.sold_count : 1}</span>
                <span onClick={() => {this.count('+')}}>+</span>
            </div>
            <button onClick={this.create}>去支付</button>
        </div>
    }

    componentDidMount(){
        detail({goods_id:this.props.match.params.id}).then(res => {
            this.setState({
                detail:res.data.result
            })
        })
    }

    count = (flag) => {
        let {detail} = this.state;
        if(flag === '-'){
            if(detail.sold_count >= 1){
                detail.sold_count--;
            }
        }else{
            detail.sold_count++;
        }
        this.setState({
            detail
        })
    }

    create = () => {
        // dispatch({type:'Detail'})
        this.props.saveDetail(this.state.detail)
        this.props.history.push('/create')
    }
}

export default connect(state=>{return {}},dispatch => {
    return {
        saveDetail(detail){
            dispatch({type:DETAIL,detail})
        }
    }
})(Detail)