/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 14:36:38 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-15 09:50:50
 */

import React,{Component} from 'react'
import {captcha,login} from '@/api/user'

class Login extends Component{
    state = {
        svg:'',
        username:'',
        password:'',
        captcha:''
    }
    render(){
        let {svg,username,password,captcha} = this.state;
        return <div>
            <input type="text" value={username} name="username" onChange={this.change}/>
            <input type="text" value={password} name="password"  onChange={this.change}/>
            <input type="text" value={captcha} name="captcha" onChange={this.change}/>
            <div dangerouslySetInnerHTML={{ __html: svg}}  />
            <button onClick={this.login}>登录</button>
        </div>
    }
    componentDidMount(){
        captcha().then(res => {
            console.log(res)
            if(res.data.code === 1){
                this.setState({
                    svg:res.data.data
                })
            }
        })
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

    /**
     * 登录
     * */ 

     login = () => {
        login(this.state).then(res => {
            console.log(res)
            if(res.data.code === 1){
                window.localStorage.setItem('token',res.data.token);
                this.props.history.push('/city')
            }
        })
     }


}

export default Login