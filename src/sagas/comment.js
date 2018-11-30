import { put, call,takeLatest } from 'redux-saga/effects'
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
       const response=yield call(createComment,comment)
       if(response.statusCode>=300){
          yield put(createCommentActionCreator.createFailAction(response.data))
       }else{
          yield put(createCommentActionCreator.createSuccessAction(response.data))
       }
    }catch(error) {
        yield put(createCommentActionCreator.createFailAction({"error":"发生网络错误"}))
    }
} 

export function* watchCreateComment(){
    yield takeLatest(REQUEST_CREATE_COMMENT.request(), createCommentAsync)
}
//删除comment
function* deleteCommentAsync(action){
    let {id}=action.payload 
    try{
       yield put(deleteCommentActionCreator.createPendingAction())
       const response=yield call(deleteCommentById,id)
       if(response.statusCode>=300){
        yield put(deleteCommentActionCreator.createFailAction(response.data))
       }else{
        yield put(deleteCommentActionCreator.createSuccessAction({...action.payload,...response.data}))
       }
    }catch(error) {
        yield put(deleteCommentActionCreator.createFailAction({"error":"发生网络错误"}))
    }
} 
export function* watchDeleteComment(){
    yield takeLatest(REQUEST_DELETE_COMMENT.request(), deleteCommentAsync)
}

//通过post获取comments
function* getCommentsByPostAsync(action){
    let {postId,lastId}=action.payload
    try{
        yield put(requestCommentsByPostActionCreator.createPendingAction())
        const response=yield call(getCommentsByPost,postId,lastId)
        if(response.statusCode>=300){
            yield put(requestCommentsByPostActionCreator.createFailAction(response.data))
        }else{
            yield put(requestCommentsByPostActionCreator.createSuccessAction({id:postId,comments:response.data}))
        }
     }catch(error) {
         yield put(requestCommentsByPostActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetCommentsByPost(){
    yield takeLatest(REQUEST_COMMENTS_BY_BLOG.request(), getCommentsByPostAsync)
}