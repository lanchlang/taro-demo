import {all} from 'redux-saga/effects'

import {watchCreateComment,watchDeleteComment,watchGetCommentsByPost} from './comment'
import {watchFavorBlog,watchUnfavorBlog,
        watchSearchBlog,watchGetBlogsByDate,
        watchGetBlogsByPopularity,watchGetBlogsByFavorite,
        watchGetBlogsByTag,watchGetBlogsByCategory,
        watchGetBlogsByUser,watchGetBlogsByIds,
        watchCreateBlog,watchUpdateBlog,
        watchDeleteBlog,watchGetBlog} from './blog'

import {watchUsernameExist,watchPhoneExist,watchEmailExist,
        watchLoginWithUsernameAndPassword,watchLoginWithEmailAndPassword,
        watchLoginWithPhoneAndPassword,watchLoginWithPhoneAndCaptcha,
        watchRegisterWithEmail,watchRegisterWithPhone,
        watchResetPasswordThroughEmail,watchResetPasswordThroughPhone,
        watchResetPassword,watchProvideCaptcha,watchVerifyCaptcha,
        watchSendCaptchaToPhone,watchVerifyPhoneCaptcha,
        watchSync
       } from './user'
  

export default function* rootSaga() {
    yield all([
      //comment
      watchCreateComment(),
      watchDeleteComment(),
      watchGetCommentsByPost(),
      //blog
      watchFavorBlog(),
      watchUnfavorBlog(),
      watchSearchBlog(),
      watchGetBlogsByDate(),
      watchGetBlogsByPopularity(),
      watchGetBlogsByFavorite(),
      watchGetBlogsByTag(),
      watchGetBlogsByCategory(),
      watchGetBlogsByUser(),
      watchGetBlogsByIds(),
      watchCreateBlog(),
      watchUpdateBlog(),
      watchDeleteBlog(),
      watchGetBlog(),
      //user    
      watchUsernameExist(),
      watchPhoneExist(),
      watchEmailExist(),
      watchLoginWithUsernameAndPassword(),
      watchLoginWithEmailAndPassword(),
      watchLoginWithPhoneAndPassword(),
      watchLoginWithPhoneAndCaptcha(),
      watchRegisterWithEmail(),
      watchRegisterWithPhone(),
      watchResetPasswordThroughEmail(),
      watchResetPasswordThroughPhone(),
      watchResetPassword(),
      watchProvideCaptcha(), 
      watchVerifyCaptcha(),
      watchSendCaptchaToPhone(),
      watchVerifyPhoneCaptcha(),
      watchSync(),
    ])
  }