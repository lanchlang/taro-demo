import { put, takeEvery,call } from 'redux-saga/effects'
import {
    REQUEST_USERNAME_EXIST,
    REQUEST_EMAIL_EXIST,
    REQUEST_PHONE_EXIST,
    REQUEST_LOGIN_WITH_USERNAME,
    REQUEST_LOGIN_WITH_EMAIL,
    REQUEST_LOGIN_WITH_PHONE,
    REQUEST_LOGIN_WITH_CAPTCHA,
    REQUEST_RESET_PASSWORD_WITH_EMAIL,
    REQUEST_RESET_PASSWORD_WITH_PHONE,
    REQUEST_RESET_PASSWORD,
    REQUEST_PROVIDE_CAPTCHA,
    REQUEST_VERIFY_CAPTCHA,
    REQUEST_SEND_CAPTCHA_TO_PHONE,
    REQUEST_VERIFY_PHONE_CAPTCHA,
    REQUEST_SYNC
 } from '../constants/index'
import {
    usernameExistActionCreator,
    emailExistActionCreator,
    phoneExistActionCreator,
    loginWithUsernameAndPasswordActionCreator,
    loginWithEmailAndPasswordActionCreator,
    loginWithPhoneAndPasswordActionCreator,
    loginWithPhoneAndCaptchaActionCreator,
    requestResetPasswordThroughEmailActionCreator,
    requestResetPasswordThroughPhoneActionCreator,
    resetPasswordActionCreator,
    provideCaptchaActionCreator,
    verifyCaptchaActionCreator,
    sendCaptchaToPhoneActionCreator,
    verifyPhoneCaptchaActionCreator,
    syncActionCreator,
} from '../actions/comment'
import{
    usernameExist,
    emailExist,
    phoneExist,
    loginWithEmailAndPassword,
    loginWithPhoneAndPassword,
    loginWithUsernameAndPassword,
    loginWithPhoneAndCaptcha,
    registerWithEmail,
    registerWithPhone,
    resetPasswordThroughEmail,
    resetPasswordThroughPhone,
    resetPassword,
    provideCaptcha,
    verifyCaptcha,
    sendCaptchaToPhone,
    verifyPhoneCaptcha,
} from '../networks/user'
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
    yield takeEvery(REQUEST_CREATE_COMMENT.request(), createCommentAsync)
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
        yield put(deleteCommentActionCreator.createSuccessAction(response.data))
       }
    }catch(error) {
        yield put(deleteCommentActionCreator.createFailAction({"error":"发生网络错误"}))
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
        const response=yield call(getCommentsByPost,postId,lastId)
        if(response.statusCode>=300){
            yield put(requestCommentsByPostActionCreator.createFailAction(response.data))
        }else{
            yield put(requestCommentsByPostActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(requestCommentsByPostActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetCommentsByPost(){
    yield takeEvery(REQUEST_COMMENTS_BY_BLOG.request(), getCommentsByPostAsync)
}