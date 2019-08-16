/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 14:36:14 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-15 09:28:27
 */

import React,{Component} from 'react'
import {registry} from '@/api/user'

class Registry extends Component{
    state = {
        username:'',
        password:'',
        nickname:''
    }
    render(){
        let {username,password,nickname} = this.state;
        return <div>
            <input type="text" value={username} onChange={this.change} name="username"/>
            <input type="text" value={password} onChange={this.change} name="password"/>
            <input type="text" value={nickname} onChange={this.change} name="nickname"/>
            <button onClick={this.registry}>注册</button>
        </div>
    }
    /**
     * 受控表单 注册信息
     */
    change = (e) => {
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }

    registry = () => {
        if(this.state.username && this.state.password){
            registry(this.state).then(res => {
                if(res.data.code === 1){
                    this.props.history.push('/login')
                }
                console.log(res)
            }) 
        }
    }  
}

export default Registry