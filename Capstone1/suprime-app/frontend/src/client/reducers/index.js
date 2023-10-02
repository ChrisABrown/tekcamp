import { combineReducers } from 'redux'
import { itemsListReducer } from './itemsListReducer.js'

export default combineReducers({
  list: itemsListReducer,
})
