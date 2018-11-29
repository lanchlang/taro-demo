import { combineReducers } from "redux";
import {REQUEST_CREATE_COMMENT,REQUEST_DELETE_COMMENT,REQUEST_COMMENTS_BY_BLOG} from "../constants/index"


const INITIAL_COMMENT_MAP_STATE = {
}
  
function commentMap (currentState = INITIAL_COMMENT_MAP_STATE, action) {
    switch (action.type) {
      case REQUEST_COMMENTS_BY_BLOG.success():
        return function(state){
            let newState={...state}
            let {comments}=action.payload
            comments.forEach(function(comment) {
                newState[comment["id"]]=comment
            });
            return newState
        }(currentState)
      case REQUEST_CREATE_COMMENT.success():
        return function(state){
            let comment=action.payload
            let newState={...state}
            newState[comment["id"]]=comment
            return newState
        }(currentState)
      case REQUEST_DELETE_COMMENT.request():
        return function(state){
            let {id} = action.payload
            let newState={...state}
            delete newState[id]   
            return newState
        }(currentState)
      default:
         return currentState
    }
}

const INITIAL_COMMENTS_BY_POST_MAP_STATE = {
}
function commentsByPostMap (currentState = INITIAL_COMMENTS_BY_POST_MAP_STATE, action) {
    switch (action.type) {
      case REQUEST_COMMENTS_BY_BLOG.success():
        return function(state){
            let newState={...state}
            let {id,comments}=action.payload
            let commentIds=newState[id] ? newState[id]:[]
            let fetchCommentIds=comments.map(function(comment){return comment.id})
            newState[id]=commentIds.concat(fetchCommentIds)
            return newState
        }(currentState)

      case REQUEST_CREATE_COMMENT.success():
          return function(state){
            let {id,blog_id}=action.payload
            let newState={...state}
            let commentIds=newState[blog_id] ? newState[blog_id]:[]
            newState[blog_id]=commentIds.concat([id])
            return newState
          }(currentState)

      default:
         return currentState
    }
}

const comment=combineReducers({
    commentMap,
    commentsByPostMap
})
export default comment