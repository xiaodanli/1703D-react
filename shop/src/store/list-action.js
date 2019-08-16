import axios from 'axios'
export function getList(dispatch){
    axios.get('/buyer/storelist').then(res => {
        dispatch({type:'LIST',list:res.data.result})
    })
}