import { put, takeEvery,call } from 'redux-saga/effects'
import {
    REQUEST_COMMENTS_BY_BLOG,
    REQUEST_CREATE_COMMENT,
    REQUEST_DELETE_COMMENT,
 } from '../constants/index'
import {
    requestCommentsByPostActionCreator,
    createCommentActionCreator,
    deleteCommentActionCreator,
} from '../actions/comment'
import{
    deleteCommentById,
    createComment,
    getCommentsByPost,
} from '../networks/comment'
//创建comment
function* createCommentAsync(action){
    let comment=action.payload 
    try{
       yield put(createCommentActionCreator.createPendingAction())
       const result=yield call(createComment,comment)
       yield put(createCommentActionCreator.createSuccessAction(result))
    }catch(error) {
        console.log(error)
        yield put(createCommentActionCreator.createFailAction(error))
    }
} 

export function* watchCreateComment(){
    yield takeEvery(REQUEST_CREATE_COMMENT.request(), createCommentAsync)
}
//删除comment
function* deleteCommentAsync(action){
    let {id}=action.payload 
    try{
       yield put(deleteCommentActionCreator.createPendingAction())
       const result=yield call(deleteCommentById,id)
       yield put(deleteCommentActionCreator.createSuccessAction(result))
    }catch(error) {
        console.log(error)
        yield put(deleteCommentActionCreator.createFailAction(error))
    }
} 
export function* watchDeleteComment(){
    yield takeEvery(REQUEST_DELETE_COMMENT.request(), deleteCommentAsync)
}

//通过post获取comments
function* getCommentsByPostAsync(action){
    let {postId,lastId}=action.payload
    try{
        yield put(requestCommentsByPostActionCreator.createPendingAction())
        const comments=yield call(getCommentsByPost,postId,lastId)
        yield put(requestCommentsByPostActionCreator.createSuccessAction(comments))
     }catch(error) {
         console.log(error)
         yield put(requestCommentsByPostActionCreator.createFailAction(error))
     }
} 
export function* watchGetCommentsByPost(){
    yield takeEvery(REQUEST_COMMENTS_BY_BLOG.request(), getCommentsByPostAsync)
}