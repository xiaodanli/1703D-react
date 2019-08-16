import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>loading</div>
}

let Login = Loadable({
    loading:Loading,
    loader: () => import('@/views/login')
})

let AddAddress = Loadable({
    loading:Loading,
    loader: () => import('@/views/add-address')
})

let AddressList = Loadable({
    loading:Loading,
    loader: () => import('@/views/address-list')
})

let City = Loadable({
    loading:Loading,
    loader: () => import('@/views/city')
})

let Create = Loadable({
    loading:Loading,
    loader: () => import('@/views/create')
})

let Detail = Loadable({
    loading:Loading,
    loader: () => import('@/views/detail')
})

let List = Loadable({
    loading:Loading,
    loader: () => import('@/views/list')
})

let My = Loadable({
    loading:Loading,
    loader: () => import('@/views/my')
})

let OrderList = Loadable({
    loading:Loading,
    loader: () => import('@/views/order-list')
})

let Registry = Loadable({
    loading:Loading,
    loader: () => import('@/views/registry')
})

// function Loadable(params){
//     return class extends Component{
//         state = {
//             Com:params.loading
//         }
//         render(){
//             let {Com} = this.state
//             return <Com/>
//         }
//         componentDidMount(){
//             params.loader().then(res => {
//                 this.setState({
//                     Com:res.default
//                 })
//             })
//             // this.setState({
//             //     Com:
//             // })
//         }
//     } 
// }


export default [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/registry',
        component:Registry
    },
    {
        path:'/list/:id',
        component:List
    },
    {
        path:'/city',
        component:City
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/create',
        component:Create
    },
    {
        path:'/',
        redirect:'/city'
    }
]