import { combineReducers } from 'redux'
import { itemsListReducer } from './itemsListReducer.js'
import { cartReducer } from './cartReducer.js'
import { userReducer } from './userReducer.js'
import { orderCreateReducer } from './orderReducer.js'

export default combineReducers({
  list: itemsListReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderCreateReducer,
})
