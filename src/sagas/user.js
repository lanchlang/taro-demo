import { put, takeEvery,call } from 'redux-saga/effects'
import {
    REQUEST_USERNAME_EXIST,
    REQUEST_EMAIL_EXIST,
    REQUEST_PHONE_EXIST,
    REQUEST_LOGIN_WITH_USERNAME,
    REQUEST_LOGIN_WITH_EMAIL,
    REQUEST_LOGIN_WITH_PHONE,
    REQUEST_LOGIN_WITH_CAPTCHA,
    REQUEST_REGISTER_WITH_EMAIL,
    REQUEST_REGISTER_WITH_PHONE,
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
    registerWithEmailActionCreator,
    registerWithPhoneActionCreator,
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
    sync,
} from '../networks/user'
//检查用户名是否存在
function* usernameExistAsync(action){
    let {username}=action.payload 
    try{
       yield put(usernameExistActionCreator.createPendingAction())
       const response=yield call(usernameExist,username)
       if(response.statusCode>=300){
          yield put(usernameExistActionCreator.createFailAction(response.data))
       }else{
          yield put(usernameExistActionCreator.createSuccessAction(response.data))
       }
    }catch(error) {
        yield put(usernameExistActionCreator.createFailAction({"error":"发生网络错误"}))
    }
} 

export function* watchUsernameExist(){
    yield takeEvery(REQUEST_USERNAME_EXIST.request(), usernameExistAsync)
}
//email是否存在
function* emailExistAsync(action){
    let {email}=action.payload 
    try{
       yield put(emailExistActionCreator.createPendingAction())
       const response=yield call(emailExist,email)
       if(response.statusCode>=300){
        yield put(emailExistActionCreator.createFailAction(response.data))
       }else{
        yield put(emailExistActionCreator.createSuccessAction(response.data))
       }
    }catch(error) {
        yield put(emailExistActionCreator.createFailAction({"error":"发生网络错误"}))
    }
} 
export function* watchEmailExist(){
    yield takeEvery(REQUEST_EMAIL_EXIST.request(), emailExistAsync)
}

//电话是否存在
function* phoneExistAsync(action){
    let {phone}=action.payload
    try{
        yield put(phoneExistActionCreator.createPendingAction())
        const response=yield call(phoneExist,phone)
        if(response.statusCode>=300){
            yield put(phoneExistActionCreator.createFailAction(response.data))
        }else{
            yield put(phoneExistActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(phoneExistActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchPhoneExist(){
    yield takeEvery(REQUEST_PHONE_EXIST.request(), phoneExistAsync)
}

//使用用户名登录
function* loginWithUsernameAndPasswordAsync(action){
    let {username,password}=action.payload
    try{
        yield put(loginWithUsernameAndPasswordActionCreator.createPendingAction())
        const response=yield call(loginWithUsernameAndPassword,username,password)
        if(response.statusCode>=300){
            yield put(loginWithUsernameAndPasswordActionCreator.createFailAction(response.data))
        }else{
            yield put(loginWithUsernameAndPasswordActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(loginWithUsernameAndPasswordActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchLoginWithUsernameAndPassword(){
    yield takeEvery(REQUEST_LOGIN_WITH_USERNAME.request(), loginWithUsernameAndPasswordAsync)
}

//使用邮箱登录
function* loginWithEmailAndPasswordAsync(action){
    let {email,password}=action.payload
    try{
        yield put(loginWithEmailAndPasswordActionCreator.createPendingAction())
        const response=yield call(loginWithEmailAndPassword,email,password)
        if(response.statusCode>=300){
            yield put(loginWithEmailAndPasswordActionCreator.createFailAction(response.data))
        }else{
            yield put(loginWithEmailAndPasswordActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(loginWithEmailAndPasswordActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchLoginWithEmailAndPassword(){
    yield takeEvery(REQUEST_LOGIN_WITH_EMAIL.request(), loginWithEmailAndPasswordAsync)
}

//使用电话登录
function* loginWithPhoneAndPasswordAsync(action){
    let {phone,password}=action.payload
    try{
        yield put(loginWithPhoneAndPasswordActionCreator.createPendingAction())
        const response=yield call(loginWithPhoneAndPassword,phone,password)
        if(response.statusCode>=300){
            yield put(loginWithPhoneAndPasswordActionCreator.createFailAction(response.data))
        }else{
            yield put(loginWithPhoneAndPasswordActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(loginWithPhoneAndPasswordActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchLoginWithPhoneAndPassword(){
    yield takeEvery(REQUEST_LOGIN_WITH_PHONE.request(), loginWithPhoneAndPasswordAsync)
}

//使用验证码登录
function* loginWithPhoneAndCaptchaAsync(action){
    let {phone,code}=action.payload
    try{
        yield put(loginWithPhoneAndCaptchaActionCreator.createPendingAction())
        const response=yield call(loginWithPhoneAndCaptcha,phone,code)
        if(response.statusCode>=300){
            yield put(loginWithPhoneAndCaptchaActionCreator.createFailAction(response.data))
        }else{
            yield put(loginWithPhoneAndCaptchaActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(loginWithPhoneAndCaptchaActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchLoginWithPhoneAndCaptcha(){
    yield takeEvery(REQUEST_LOGIN_WITH_CAPTCHA.request(), loginWithPhoneAndCaptchaAsync)
}

//使用邮箱注册
function* registerWithEmailAsync(action){
    let {email,username,password}=action.payload
    try{
        yield put(registerWithEmailActionCreator.createPendingAction())
        const response=yield call(registerWithEmail,username,email,password)
        if(response.statusCode>=300){
            yield put(registerWithEmailActionCreator.createFailAction(response.data))
        }else{
            yield put(registerWithEmailActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(registerWithEmailActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchRegisterWithEmail(){
    yield takeEvery(REQUEST_REGISTER_WITH_EMAIL.request(), registerWithEmailAsync)
}

//使用电话注册
function* registerWithPhoneAsync(action){
    let {phone,username,password}=action.payload
    try{
        yield put(registerWithPhoneActionCreator.createPendingAction())
        const response=yield call(registerWithPhone,username,phone,password)
        if(response.statusCode>=300){
            yield put(registerWithPhoneActionCreator.createFailAction(response.data))
        }else{
            yield put(registerWithPhoneActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(registerWithPhoneActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchRegisterWithPhone(){
    yield takeEvery(REQUEST_REGISTER_WITH_PHONE.request(), registerWithPhoneAsync)
}

//请求使用邮箱重置密码
function* resetPasswordThroughEmailAsync(action){
    let {email}=action.payload
    try{
        yield put(requestResetPasswordThroughEmailActionCreator.createPendingAction())
        const response=yield call(resetPasswordThroughEmail,email)
        if(response.statusCode>=300){
            yield put(requestResetPasswordThroughEmailActionCreator.createFailAction(response.data))
        }else{
            yield put(requestResetPasswordThroughEmailActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(requestResetPasswordThroughEmailActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchResetPasswordThroughEmail(){
    yield takeEvery(REQUEST_RESET_PASSWORD_WITH_EMAIL.request(), resetPasswordThroughEmailAsync)
}
//请求使用电话重置密码
function* resetPasswordThroughPhoneAsync(action){
    let {phone}=action.payload
    try{
        yield put(requestResetPasswordThroughPhoneActionCreator.createPendingAction())
        const response=yield call(resetPasswordThroughPhone,phone)
        if(response.statusCode>=300){
            yield put(requestResetPasswordThroughPhoneActionCreator.createFailAction(response.data))
        }else{
            yield put(requestResetPasswordThroughPhoneActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(requestResetPasswordThroughPhoneActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchResetPasswordThroughPhone(){
    yield takeEvery(REQUEST_RESET_PASSWORD_WITH_PHONE.request(), resetPasswordThroughPhoneAsync)
}
//重置密码
function* resetPasswordAsync(action){
    let {password,token}=action.payload
    try{
        yield put(resetPasswordActionCreator.createPendingAction())
        const response=yield call(resetPassword,password,token)
        if(response.statusCode>=300){
            yield put(resetPasswordActionCreator.createFailAction(response.data))
        }else{
            yield put(resetPasswordActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(resetPasswordActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchResetPassword(){
    yield takeEvery(REQUEST_RESET_PASSWORD.request(), resetPasswordAsync)
}

//获取验证码
function* provideCaptchaAsync(action){
    let params=action.payload
    try{
        yield put(provideCaptchaActionCreator.createPendingAction())
        const response=yield call(provideCaptcha,...params)
        if(response.statusCode>=300){
            yield put(provideCaptchaActionCreator.createFailAction(response.data))
        }else{
            yield put(provideCaptchaActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(provideCaptchaActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchProvideCaptcha(){
    yield takeEvery(REQUEST_PROVIDE_CAPTCHA.request(), provideCaptchaAsync)
}

//验证验证码
function* verifyCaptchaAsync(action){
    let {id,value}=action.payload
    try{
        yield put(verifyCaptchaActionCreator.createPendingAction())
        const response=yield call(verifyCaptcha,id,value)
        if(response.statusCode>=300){
            yield put(verifyCaptchaActionCreator.createFailAction(response.data))
        }else{
            yield put(verifyCaptchaActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(verifyCaptchaActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchVerifyCaptcha(){
    yield takeEvery(REQUEST_VERIFY_CAPTCHA.request(), verifyCaptchaAsync)
}

//请求向手机发送验证码
function* sendCaptchaToPhoneAsync(action){
    let {phone}=action.payload
    try{
        yield put(sendCaptchaToPhoneActionCreator.createPendingAction())
        const response=yield call(sendCaptchaToPhone,phone)
        if(response.statusCode>=300){
            yield put(sendCaptchaToPhoneActionCreator.createFailAction(response.data))
        }else{
            yield put(sendCaptchaToPhoneActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(sendCaptchaToPhoneActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchSendCaptchaToPhone(){
    yield takeEvery(REQUEST_SEND_CAPTCHA_TO_PHONE.request(), sendCaptchaToPhoneAsync)
}

//验证手机验证码
function* verifyPhoneCaptchaAsync(action){
    let {phone,captcha}=action.payload
    try{
        yield put(verifyPhoneCaptchaActionCreator.createPendingAction())
        const response=yield call(verifyPhoneCaptcha,phone,captcha)
        if(response.statusCode>=300){
            yield put(verifyPhoneCaptchaActionCreator.createFailAction(response.data))
        }else{
            yield put(verifyPhoneCaptchaActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(verifyPhoneCaptchaActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchVerifyPhoneCaptcha(){
    yield takeEvery(REQUEST_VERIFY_PHONE_CAPTCHA.request(), verifyPhoneCaptchaAsync)
}

//同步
function* syncAsync(action){
    let params=action.payload
    try{
        yield put(syncActionCreator.createPendingAction())
        const response=yield call(sync,params)
        if(response.statusCode>=300){
            yield put(syncActionCreator.createFailAction(response.data))
        }else{
            yield put(syncActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(syncActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchSync(){
    yield takeEvery(REQUEST_SYNC.request(), syncAsync)
}