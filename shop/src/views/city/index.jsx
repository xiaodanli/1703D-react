/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 14:37:04 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-16 08:55:32
 */

import React,{Component} from 'react'
import {storelist} from '@/api/order'
import CityItem from '@/components/cityItem'

class City extends Component{
    state = {
        storeList:[]
    }
    render(){
        let {storeList} = this.state;
        return <div>
            {storeList.map(item => <CityItem {...item}/>)}
        </div>
    }  
    componentDidMount(){
        storelist().then(res => {
            if(res.data.code === 1){
                console.log(res.data.result)
                this.setState({
                    storeList:res.data.result
                })
            }
        })
    } 
}

export default City