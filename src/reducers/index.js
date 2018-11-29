import { combineReducers } from 'redux'
import counter from './counter'
import comment from './comment'

export default combineReducers({
  counter,
  comment,
})
