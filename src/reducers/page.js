import { combineReducers } from "redux";
import {REQUEST_USERNAME_EXIST,REQUEST_EMAIL_EXIST,REQUEST_PHONE_EXIST
       ,REQUEST_LOGIN_WITH_USERNAME,REQUEST_LOGIN_WITH_EMAIL,REQUEST_LOGIN_WITH_PHONE
       ,REQUEST_LOGIN_WITH_CAPTCHA,REQUEST_REGISTER_WITH_EMAIL,REQUEST_REGISTER_WITH_PHONE
       ,REQUEST_RESET_PASSWORD_WITH_EMAIL,REQUEST_RESET_PASSWORD_WITH_PHONE,REQUEST_RESET_PASSWORD
       ,REQUEST_PROVIDE_CAPTCHA,REQUEST_VERIFY_CAPTCHA,REQUEST_SEND_CAPTCHA_TO_PHONE
       ,REQUEST_VERIFY_PHONE_CAPTCHA,REQUEST_SYNC,REQUEST_FAVOR,REQUEST_UNFAVOR
       ,REQUEST_SEARCH_BLOG,REQUEST_BLOGS_BY_DATE,REQUEST_BLOGS_BY_POPULARITY
       ,REQUEST_BLOGS_BY_FAVORITE,REQUEST_BLOGS_BY_TAG,REQUEST_BLOGS_BY_CATEGORY
       ,REQUEST_BLOGS_BY_USER,REQUEST_BLOGS_BY_IDS,REQUEST_CREATE_BLOG
       ,REQUEST_UPDATE_BLOG,REQUEST_DELETE_BLOG,REQUEST_GET_BLOG
       ,REQUEST_CREATE_COMMENT,REQUEST_DELETE_COMMENT,REQUEST_COMMENTS_BY_BLOG} from '../constants/index'


// export const RESET_STATE="RESET_STATE"
export const INITIAL_STATE="INITIAL_STATE"
export const PENDING_STATE="PENDING_STATE"
export const LOAD_MORE_STATE="LOAD_MORE_STATE"
export const REFRESH_STATE="REFRESH_STATE"
export const FAIL_STATE="FAIL_STATE"
export const SUCCESS_STATE="SUCCESS_STATE"

class CommonState{
    constructor(state){
       this.innerState=state
    }
    initial(){
        return new CommonState(INITIAL_STATE)
    }
    pending(){
        return new CommonState(PENDING_STATE)
    }
    loadMore(){
        return new CommonState(LOAD_MORE_STATE)
    }
    refresh(){
        return new CommonState(REFRESH_STATE)
    }
    fail(){
        return new CommonState(FAIL_STATE)
    }
    success(){
        return new CommonState(SUCCESS_STATE)
    }
    reset(){
        return new CommonState(INITIAL_STATE)
    }
}
//INITIAL_STATE =>PENDING_STATE=>SUCCESS_STATE=>INITIAL_STATE
//INITIAL_STATE =>PENDING_STATE=>FAIL_STATE=>INITIAL_STATE
function initialPendingSuccessFailTransform(currentState,action,actionTypeRequest){
    switch(action.type){
        case actionTypeRequest.request():
           return currentState.pending()
        case actionTypeRequest.success():
           return currentState.success()
        case actionTypeRequest.fail():
           return currentState.fail()  
        case actionTypeRequest.reset():
           return currentState.reset()        
        default:
           return currentState
      }
}
//检查用户名是否存在的page状态
const INITIAL_USERNAME_EXIST_PAGE_STATE =new CommonState(INITIAL_STATE)
function usernameExistPageState(currentState=INITIAL_USERNAME_EXIST_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_USERNAME_EXIST)
}

//检查Email是否存在的page状态
const INITIAL_EMAIL_EXIST_PAGE_STATE =new CommonState(INITIAL_STATE)
function emailExistPageState(currentState=INITIAL_EMAIL_EXIST_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_EMAIL_EXIST)
}

//检查电话是否存在的page状态
const INITIAL_PHONE_EXIST_PAGE_STATE =new CommonState(INITIAL_STATE)
function phoneExistPageState(currentState=INITIAL_PHONE_EXIST_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_PHONE_EXIST)
}

//使用用户名登录的page状态
const INITIAL_LOGIN_WITH_USERNAME_PAGE_STATE =new CommonState(INITIAL_STATE)
function loginWithUsernamePageState(currentState=INITIAL_LOGIN_WITH_USERNAME_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_LOGIN_WITH_USERNAME)
}
//使用邮箱登录的page状态
const INITIAL_LOGIN_WITH_EMAIL_PAGE_STATE =new CommonState(INITIAL_STATE)
function loginWithEmailPageState(currentState=INITIAL_LOGIN_WITH_EMAIL_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_LOGIN_WITH_EMAIL)
}
//使用电话登录的page状态
const INITIAL_LOGIN_WITH_PHONE_PAGE_STATE =new CommonState(INITIAL_STATE)
function loginWithPhonePageState(currentState=INITIAL_LOGIN_WITH_PHONE_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_LOGIN_WITH_PHONE)
}
//使用验证码登录的page状态
const INITIAL_LOGIN_WITH_CAPTCHA_PAGE_STATE =new CommonState(INITIAL_STATE)
function loginWithCaptchaPageState(currentState=INITIAL_LOGIN_WITH_CAPTCHA_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_LOGIN_WITH_CAPTCHA)
}
//使用邮箱注册的page状态
const INITIAL_REGISTER_WITH_EMAIL_PAGE_STATE =new CommonState(INITIAL_STATE)
function registerWithEmailPageState(currentState=INITIAL_REGISTER_WITH_EMAIL_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_REGISTER_WITH_EMAIL)
}
//使用电话注册的page状态
const INITIAL_REGISTER_WITH_PHONE_PAGE_STATE =new CommonState(INITIAL_STATE)
function registerWithPhonePageState(currentState=INITIAL_REGISTER_WITH_PHONE_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_REGISTER_WITH_PHONE)
}
//请求使用Email重置密码的page状态
const INITIAL_RESET_PASSWORD_WITH_EMAIL_PAGE_STATE =new CommonState(INITIAL_STATE)
function resetPasswordWithEmailPageState(currentState=INITIAL_RESET_PASSWORD_WITH_EMAIL_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_RESET_PASSWORD_WITH_EMAIL)
}
//请求使用电话重置密码的page状态
const INITIAL_RESET_PASSWORD_WITH_PHONE_PAGE_STATE =new CommonState(INITIAL_STATE)
function resetPasswordWithPhonePageState(currentState=INITIAL_RESET_PASSWORD_WITH_PHONE_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_RESET_PASSWORD_WITH_PHONE)
}

//重置密码的page状态
const INITIAL_RESET_PASSWORD_PAGE_STATE =new CommonState(INITIAL_STATE)
function resetPasswordPageState(currentState=INITIAL_RESET_PASSWORD_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_RESET_PASSWORD)
}

//请求图形验证码的page状态
const INITIAL_PROVIDE_CAPTCHA_PAGE_STATE =new CommonState(INITIAL_STATE)
function provideCaptchaPageState(currentState=INITIAL_PROVIDE_CAPTCHA_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_PROVIDE_CAPTCHA)
}
//验证图形验证码的page状态
const INITIAL_VERIFY_CAPTCHA_PAGE_STATE =new CommonState(INITIAL_STATE)
function verifyCaptchaPageState(currentState=INITIAL_VERIFY_CAPTCHA_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_VERIFY_CAPTCHA)
}
//请求发送验证码到手机的page状态
const INITIAL_SEND_CAPTCHA_TO_PHONE_PAGE_STATE =new CommonState(INITIAL_STATE)
function sendCaptchaToPhonePageState(currentState=INITIAL_SEND_CAPTCHA_TO_PHONE_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_SEND_CAPTCHA_TO_PHONE)
}

//验证手机验证码的page状态
const INITIAL_VERIFY_PHONE_CAPTCHA_PAGE_STATE =new CommonState(INITIAL_STATE)
function verifyPhoneCaptchaPageState(currentState=INITIAL_VERIFY_PHONE_CAPTCHA_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_VERIFY_PHONE_CAPTCHA)
}

//验证手机验证码的page状态
const INITIAL_SYNC_PAGE_STATE =new CommonState(INITIAL_STATE)
function syncPageState(currentState=INITIAL_SYNC_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_SYNC)
}
//点赞的page状态
const INITIAL_FAVOR_PAGE_STATE =new CommonState(INITIAL_STATE)
function favorPageState(currentState=INITIAL_FAVOR_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_FAVOR)
}
//取消点赞的page状态
const INITIAL_UNFAVOR_PAGE_STATE =new CommonState(INITIAL_STATE)
function unfavorPageState(currentState=INITIAL_UNFAVOR_PAGE_STATE,action){
    return initialPendingSuccessFailTransform(currentState,action,REQUEST_UNFAVOR)
}
