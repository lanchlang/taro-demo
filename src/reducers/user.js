import { combineReducers } from "redux";
import {REQUEST_LOGOUT,REQUEST_LOGIN_WITH_USERNAME,
    REQUEST_LOGIN_WITH_EMAIL,REQUEST_LOGIN_WITH_PHONE,
    REQUEST_LOGIN_WITH_CAPTCHA,REQUEST_REGISTER_WITH_EMAIL,
    REQUEST_REGISTER_WITH_PHONE,REQUEST_RESET_PASSWORD_WITH_EMAIL,
    REQUEST_RESET_PASSWORD_WITH_PHONE,REQUEST_RESET_PASSWORD,
    REQUEST_PROVIDE_CAPTCHA,REQUEST_VERIFY_CAPTCHA,
    REQUEST_SEND_CAPTCHA_TO_PHONE,REQUEST_VERIFY_PHONE_CAPTCHA,
    REQUEST_SYNC,REQUEST_FAVOR,REQUEST_UNFAVOR
    } from "../constants/index"

const INITIAL_BASE_USER_STATE = {
}
function baseUser (state = INITIAL_BASE_USER_STATE, action) {
    switch (action.type) {
      case REQUEST_LOGOUT.request():
        return INITIAL_BASE_USER_STATE
       case REQUEST_LOGIN_WITH_USERNAME.success(),REQUEST_LOGIN_WITH_EMAIL.success()
            ,REQUEST_LOGIN_WITH_PHONE.success(),REQUEST_LOGIN_WITH_CAPTCHA.success()
            ,REQUEST_REGISTER_WITH_PHONE.success():
         return {
             ...action.payload.user
         }
       default:
         return state
    }
}

const INITIAL_LIKES_STATE=[]
function likes (state = INITIAL_LIKES_STATE, action) {
    switch (action.type) {
      case REQUEST_LOGOUT.request():
           return INITIAL_LIKES_STATE
       case REQUEST_LOGIN_WITH_USERNAME.success(),REQUEST_LOGIN_WITH_EMAIL.success()
            ,REQUEST_LOGIN_WITH_PHONE.success(),REQUEST_LOGIN_WITH_CAPTCHA.success()
            ,REQUEST_REGISTER_WITH_PHONE.success():
           return action.payload.user.likes
       case REQUEST_FAVOR.success():
           return state.concat([action.payload.id])    
       case REQUEST_UNFAVOR.success():
           return state.filter(function(id){return id!=action.payload.id})      
       default:
         return state
    }
}
const INITIAL_TOKEN_STATE=""
function token (state = INITIAL_TOKEN_STATE, action) {
    switch (action.type) {
      case REQUEST_LOGOUT.request():
           return INITIAL_TOKEN_STATE
       case REQUEST_LOGIN_WITH_USERNAME.success(),REQUEST_LOGIN_WITH_EMAIL.success()
            ,REQUEST_LOGIN_WITH_PHONE.success(),REQUEST_LOGIN_WITH_CAPTCHA.success()
            ,REQUEST_REGISTER_WITH_PHONE.success():
           return action.payload.header["user_token"]     
       default:
         return state
    }
}
const userInfo=combineReducers({
    baseUser,
    likes,
    token,
})
export default userInfo