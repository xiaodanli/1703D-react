/*
 * @Author: 李晓丹 
 * @Date: 2019-08-14 16:00:24 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-08-16 09:09:04
 */

 import request from '@/utils/request'

/**
 * 国家列表
 * */  

 export function storelist(){
    return request.get('/buyer/storelist')
 }
 
 /**
  * 商品列表
  * @param {object} 国家id
  * 
 */

 export function goodslist(data){
     return request.post('/store/goods/list',data)
 }

/**
 * 商品详情
 * 
 * */  

export function detail(data){
    return request.get('/buyer/detail',data)
}
 


