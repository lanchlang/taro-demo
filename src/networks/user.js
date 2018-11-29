import Taro from '@tarojs/taro'
import {generateUrl,getJwtToken} from '../util/common'

//用户名是否存在
export function usernameExist(username){
    return Taro.request({
        url: generateUrl("/username_exist"),
        data: {
            "username": username,
        },
        method:"GET",
        header: {
            ...getJwtToken()
        }
    })
}
//邮箱是否存在
export function emailExist(email){
    return Taro.request({
        url: generateUrl("/email_exist"),
        data: {
            "email": email,
        },
        method:"GET",
        header: {
            ...getJwtToken()
        }
    })
}

//电话是否存在
export function phoneExist(phone){
    return Taro.request({
        url: generateUrl("/phone_exist"),
        data: {
            "phone": phone,
        },
        method:"GET",
        header: {
            ...getJwtToken()
        }
    })
}

//邮箱密码登录
export function loginWithEmailAndPassword(email,password){
    return Taro.request({
        url: generateUrl("/login/email"),
        data: {
            "email": email,
            "password":password,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}

//电话密码登录
export function loginWithPhoneAndPassword(phone,password){
    return Taro.request({
        url: generateUrl("/login/phone"),
        data: {
            "phone": phone,
            "password":password,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//用户名密码登录
export function loginWithUsernameAndPassword(username,password){
    return Taro.request({
        url: generateUrl("/login/username"),
        data: {
            "username": username,
            "password":password,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//电话,验证码登录
export function loginWithPhoneAndCaptcha(phone,code){
    return Taro.request({
        url: generateUrl("/login/captcha"),
        data: {
            "phone": phone,
            "code":code,
        },
        method:"POST",
        header: {
            ...getJwtToken()
        }
    })
}
//Email注册
export function registerWithEmail(username,email,password){
    return Taro.request({
        url: generateUrl("/register/email"),
        data: {
            "username": username,
            "email":email,
            "password":password,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//Phone注册
export function registerWithPhone(username,phone,password){
    return Taro.request({
        url: generateUrl("/register/phone"),
        data: {
            "username": username,
            "phone":phone,
            "password":password,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//通过邮箱重置密码
export function resetPasswordThroughEmail(email){
    return Taro.request({
        url: generateUrl("/forget/password/email"),
        data: {
            "email": email,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//通过电话重置密码
export function resetPasswordThroughPhone(phone){
    return Taro.request({
        url: generateUrl("/forget/password/phone"),
        data: {
            "phone": phone,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//重置密码
export function resetPassword(password,token){
    return Taro.request({
        url: generateUrl("/forget/password/phone"),
        data: {
            "password": password,
            "token":token,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//提供图形验证码
export function provideCaptcha(){
    return Taro.request({
        url: generateUrl("/forget/password/phone"),
        data: {

        },
        method:"GET",
        header: {
            ...getJwtToken(),
        }
    })
}

//检测图形验证码
export function verifyCaptcha(id,value){
    return Taro.request({
        url: generateUrl("/verify_captcha"),
        data: {
            "id": id,
            "value":value,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}

//发送手机验证码
export function sendCaptchaToPhone(phone){
    return Taro.request({
        url: generateUrl("/send_captcha_to_phone"),
        data: {
            "phone": phone,
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//检测电话验证码
export function verifyPhoneCaptcha(phone,captcha){
    return Taro.request({
        url: generateUrl("/verify_phone_captcha"),
        data: {
            "phone": phone,
            "captcha":captcha
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}

//同步
export function sync(params){
    return Taro.request({
        url: generateUrl("/sync"),
        data: {
           ...params
        },
        method:"POST",
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}