import {
    REQUEST_LOGOUT,
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
    REQUEST_SYNC,
 } from "../constants/index"
import ActionCreator from "./common"
 /**
  * 请求登出，仅仅将本地的jwt删除
  */
export const logoutActionCreator=new ActionCreator(REQUEST_LOGOUT)

/**
 * 请求查看用户名是否存在
 * @param {用户名} username 
 */
export const usernameExistActionCreator=new ActionCreator(REQUEST_USERNAME_EXIST)


/**
 * 请求查看邮箱是否存在
 * @param {邮箱} email 
 */
export const emailExistActionCreator=new ActionCreator(REQUEST_EMAIL_EXIST)

/**
 * 请求查看电话是否存在
 * @param {电话} phone 
 */
export const phoneExistActionCreator=new ActionCreator(REQUEST_PHONE_EXIST)
/**
 * 使用用户名登录
 * @param {用户名} username {密码} password 
 */
export const loginWithUsernameAndPasswordActionCreator=new ActionCreator(REQUEST_LOGIN_WITH_USERNAME)
/**
 * 使用邮箱登录
 * @param {邮箱} email {密码} password 
 */
export const loginWithEmailAndPasswordActionCreator=new ActionCreator(REQUEST_LOGIN_WITH_EMAIL)
/**
 * 使用电话登录
 * @param {电话} phone {密码} password 
 */
export const loginWithPhoneAndPasswordActionCreator=new ActionCreator(REQUEST_LOGIN_WITH_PHONE)
/**
 * 使用验证码登录
 * @param {电话} phone {验证码} code 
 */
export const loginWithPhoneAndCaptchaActionCreator=new ActionCreator(REQUEST_LOGIN_WITH_CAPTCHA)

/**
 * 请求使用邮箱重置密码
 * @param {邮箱} email
 */
export const requestResetPasswordThroughEmailActionCreator=new ActionCreator(REQUEST_RESET_PASSWORD_WITH_EMAIL)
/**
 * 请求使用电话重置密码
 * @param {电话} phone
 */
export const requestResetPasswordThroughPhoneActionCreator=new ActionCreator(REQUEST_RESET_PASSWORD_WITH_PHONE)
/**
 * 重置密码
 * @param {密码} password {验证码} tokenString
 */
export const resetPasswordActionCreator=new ActionCreator(REQUEST_RESET_PASSWORD)
/**
 * 提供验证码
 * @param 
 */
export const provideCaptchaActionCreator=new ActionCreator(REQUEST_PROVIDE_CAPTCHA)
/**
 * 验证图形验证码
 * @param {ID} id {值} value
 */
export const verifyCaptchaActionCreator=new ActionCreator(REQUEST_VERIFY_CAPTCHA)
/**
 * 请求发送手机验证码
 * @param {电话} phone
 */
export const sendCaptchaToPhoneActionCreator=new ActionCreator(REQUEST_SEND_CAPTCHA_TO_PHONE)
/**
 * 验证手机及其验证码
 * @param {电话} phone {验证码}captcha
 */
export const verifyPhoneCaptchaActionCreator=new ActionCreator(REQUEST_VERIFY_PHONE_CAPTCHA)
/**
 * 同步
 * @param {用户信息} user
 */
export const syncActionCreator=new ActionCreator(REQUEST_SYNC)