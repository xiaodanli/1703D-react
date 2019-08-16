import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {order} from './order/order-reducer'

// let obj = {num:1}
let reducer = combineReducers({
    order
})

let store = createStore(reducer,applyMiddleware(thunk))

window.store = store

export default store