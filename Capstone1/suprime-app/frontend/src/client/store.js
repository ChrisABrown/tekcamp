import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
//TODO: define reducers so page can render properly before testing anything
// import combineReducers from './reducers/rootReducer.js'

const initialState = {}

const middleware = [thunk]

const store = createStore(
  // combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
