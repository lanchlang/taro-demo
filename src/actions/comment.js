import {
   REQUEST_COMMENTS_BY_BLOG,
   REQUEST_CREATE_COMMENT,
   REQUEST_DELETE_COMMENT,
} from "../constants/index"
import ActionCreator from "./common"
//通过post获取comments
/**
 * @param {最末的commentID} lastId {post的ID}postId
 */

export const requestCommentsByPostActionCreator=new ActionCreator(REQUEST_COMMENTS_BY_BLOG)

//创建comment
/**
 * 
 * @param comment 创建comment
 */
export const createCommentActionCreator=new ActionCreator(REQUEST_CREATE_COMMENT)

//删除comment
/**
 * 
 * @param {comment id} id 
 */
export const deleteCommentActionCreator=new ActionCreator(REQUEST_DELETE_COMMENT)
