import request from '@/utils/request'


/**
 * 注册接口
 * @param {object} data 注册携带的参数
 * @return 注册完成之后的promise
 */
export function registry(data){
    return request.post('/buyer/user/register',data)
}
/**
 * 图形验证码
 * 
*/

export function captcha(){
    return request.get('/buyer/user/captcha')
}

/**
 * 登录
 * */ 

 export function login(data){
     return request.post('/buyer/user/login',data)
 }