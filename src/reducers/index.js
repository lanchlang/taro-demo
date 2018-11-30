import { combineReducers } from 'redux'
import counter from './counter'
import commentInfo from './comment'
import blogInfo from './blog'
import userInfo from './user'

export default combineReducers({
  counter,
  commentInfo,
  blogInfo,
  userInfo
})
