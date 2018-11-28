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
            ...getJwtToken()
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
            ...getJwtToken()
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
            ...getJwtToken()
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
export function placeholder(){

}