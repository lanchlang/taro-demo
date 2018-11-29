/**
 * 请求描述
 *  */

export class Request{
    constructor(requestDescription){
       this.requestDescription=requestDescription
       this.requestPendingDescription=requestDescription+"_PENDING"
       this.cancelRequestDescription=requestDescription+"_CANCEL"
       this.successRequestDescription=requestDescription+"_SUCCESS"
       this.failRequestDescription=requestDescription+"_FAIL"
    }
    request(){
        return this.requestDescription;
    }
    pending(){
        return this.requestPendingDescription
    }
    cancel(){
        return this.cancelRequestDescription
    }
    success(){
        return this.successRequestDescription
    }
    fail(){
        return this.failRequestDescription
    }
}

/**
 *登出
 **/

export const REQUEST_LOGOUT=new Request("REQUEST_LOGOUT")


/**
 * 检查用户名/邮箱/电话是否存在
 *  */
export const REQUEST_USERNAME_EXIST=new Request("REQUEST_USERNAME_EXIST")


export const REQUEST_EMAIL_EXIST=new Request("REQUEST_EMAIL_EXIST")


export const REQUEST_PHONE_EXIST=new Request("REQUEST_PHONE_EXIST")

/**
 * 登录 用户名/邮箱/电话/验证码
 */
export const REQUEST_LOGIN_WITH_USERNAME=new Request("REQUEST_LOGIN_WITH_USERNAME")
export const REQUEST_LOGIN_WITH_EMAIL=new Request("REQUEST_LOGIN_WITH_EMAIL")
export const REQUEST_LOGIN_WITH_PHONE=new Request("REQUEST_LOGIN_WITH_PHONE")
export const REQUEST_LOGIN_WITH_CAPTCHA=new Request("REQUEST_LOGIN_WITH_CAPTCHA")

/**
 * 请求重置密码 使用邮箱/电话
 */
export const REQUEST_RESET_PASSWORD_WITH_EMAIL=new Request("REQUEST_REQUEST_RESET_PASSWORD_WITH_EMAIL")
export const REQUEST_RESET_PASSWORD_WITH_PHONE=new Request("REQUEST_REQUEST_RESET_PASSWORD_WITH_PHONE")
/**
 * 重置密码
 */
export const REQUEST_RESET_PASSWORD=new Request("REQUEST_RESET_PASSWORD")
/**
 * 请求图形验证码
 */
export const REQUEST_PROVIDE_CAPTCHA=new Request("REQUEST_PROVIDE_CAPTCHA")
/**
 * 检测图形验证码
 */
export const REQUEST_VERIFY_CAPTCHA=new Request("REQUEST_VERIFY_CAPTCHA")
/**
 * 发送手机验证码
 */
export const REQUEST_SEND_CAPTCHA_TO_PHONE=new Request("REQUEST_SEND_CAPTCHA_TO_PHONE")
/**
 * 检测手机验证码
 */
export const REQUEST_VERIFY_PHONE_CAPTCHA=new Request("REQUEST_VERIFY_PHONE_CAPTCHA")

/**
 * sync data
 *  */
export const REQUEST_SYNC=new Request("REQUEST_SYNC")

/**
 * favor/unfavor
 **/
export const REQUEST_FAVOR=new Request("REQUEST_FAVOR")

export const REQUEST_UNFAVOR=new Request("REQUEST_UNFAVOR")


/**
 * search
 **/
export const REQUEST_SEARCH_BLOG=new Request("REQUEST_SEARCH_BLOG")


/**
 * GET BLOG LIST by create_date,popular(view cnt),favorite(like cnt),tag,category,user
 *  */
export const REQUEST_BLOGS_BY_DATE=new Request("REQUEST_BLOGS_BY_DATE")

export const REQUEST_BLOGS_BY_POPULARITY=new Request("REQUEST_BLOGS_BY_POPULARITY")

export const REQUEST_BLOGS_BY_FAVORITE=new Request("REQUEST_BLOGS_BY_FAVORITE")

export const REQUEST_BLOGS_BY_TAG=new Request("REQUEST_BLOGS_BY_TAG")

export const REQUEST_BLOGS_BY_CATEGORY=new Request("REQUEST_BLOGS_BY_CATEGORY")

export const REQUEST_BLOGS_BY_USER=new Request("REQUEST_BLOGS_BY_USER")

export const REQUEST_BLOGS_BY_IDS=new Request("REQUEST_BLOGS_BY_IDS")

/**
 * CURD BLOG 
 *  */
export const REQUEST_CREATE_BLOG=new Request("REQUEST_CREATE_BLOG")

export const REQUEST_UPDATE_BLOG=new Request("REQUEST_UPDATE_BLOG")

export const REQUEST_DELETE_BLOG=new Request("REQUEST_DELETE_BLOG")

export const REQUEST_GET_BLOG=new Request("REQUEST_GET_BLOG")


/**
 * Create comment,delete comment, get comments by BLOG 
 *  */
export const REQUEST_CREATE_COMMENT=new Request("REQUEST_CREATE_COMMENT")

export const REQUEST_DELETE_COMMENT=new Request("REQUEST_DELETE_COMMENT")

export const REQUEST_COMMENTS_BY_BLOG=new Request("REQUEST_COMMENTS_BY_BLOG")
