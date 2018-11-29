import { put, takeEvery,call } from 'redux-saga/effects'
import {
    REQUEST_FAVOR,
    REQUEST_UNFAVOR,
    REQUEST_SEARCH_BLOG,
    REQUEST_BLOGS_BY_DATE,
    REQUEST_BLOGS_BY_POPULARITY,
    REQUEST_BLOGS_BY_FAVORITE,
    REQUEST_BLOGS_BY_TAG,
    REQUEST_BLOGS_BY_CATEGORY,
    REQUEST_BLOGS_BY_USER,
    REQUEST_BLOGS_BY_IDS,
    REQUEST_CREATE_BLOG,
    REQUEST_UPDATE_BLOG,
    REQUEST_DELETE_BLOG,
    REQUEST_GET_BLOG,
 } from '../constants/index'
import {
    favorBlogActionCreator,
    unfavorBlogActionCreator,
    searchBlogActionCreator,
    getBlogsByDateActionCreator,
    getBlogsByPopularityActionCreator,
    getBlogsByFavoriteActionCreator,
    getBlogsByTagActionCreator,
    getBlogsByCategoryActionCreator,
    getBlogsByUserActionCreator,
    getBlogsByIdsActionCreator,
    createBlogActionCreator,
    updateBlogActionCreator,
    deleteBlogActionCreator,
    getBlogActionCreator,
} from '../actions/blog'
import{
    getBlogById,
    likeBlogById,
    unlikeBlogById,
    deleteBlogById,
    updateBlogById,
    createBlog,
    searchBlog,
    getListBlogByIds,
    listBlog,
    getBlogsByUser
} from '../networks/blog'
//点赞
function* favorBlogAsync(action){
    let {id}=action.payload 
    try{
       yield put(favorBlogActionCreator.createPendingAction())
       const response=yield call(likeBlogById,id)
       if(response.statusCode>=300){
          yield put(favorBlogActionCreator.createFailAction(response.data))
       }else{
          yield put(favorBlogActionCreator.createSuccessAction(response.data))
       }
    }catch(error) {
        yield put(favorBlogActionCreator.createFailAction({"error":"发生网络错误"}))
    }
} 

export function* watchFavorBlog(){
    yield takeEvery(REQUEST_FAVOR.request(), favorBlogAsync)
}
//取消点赞
function* unfavorBlogAsync(action){
    let {id}=action.payload 
    try{
       yield put(unfavorBlogActionCreator.createPendingAction())
       const response=yield call(unlikeBlogById,id)
       if(response.statusCode>=300){
        yield put(unfavorBlogActionCreator.createFailAction(response.data))
       }else{
        yield put(unfavorBlogActionCreator.createSuccessAction(response.data))
       }
    }catch(error) {
        yield put(unfavorBlogActionCreator.createFailAction({"error":"发生网络错误"}))
    }
} 
export function* watchUnfavorBlog(){
    yield takeEvery(REQUEST_UNFAVOR.request(), unfavorBlogAsync)
}

//搜索blog
function* searchBlogAsync(action){
    let {query,lastId}=action.payload
    try{
        yield put(searchBlogActionCreator.createPendingAction())
        const response=yield call(searchBlog,query,lastId)
        if(response.statusCode>=300){
            yield put(searchBlogActionCreator.createFailAction(response.data))
        }else{
            yield put(searchBlogActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(searchBlogActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchSearchBlog(){
    yield takeEvery(REQUEST_SEARCH_BLOG.request(), searchBlogAsync)
}

//根据日期获取blogs
function* getBlogsByDateAsync(action){
    let params=action.payload
    try{
        yield put(getBlogsByDateActionCreator.createPendingAction())
        const response=yield call(listBlog,params)
        if(response.statusCode>=300){
            yield put(getBlogsByDateActionCreator.createFailAction(response.data))
        }else{
            yield put(getBlogsByDateActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(getBlogsByDateActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetBlogsByDate(){
    yield takeEvery(REQUEST_BLOGS_BY_DATE.request(), getBlogsByDateAsync)
}
//根据流行程度获取blogs
function* getBlogsByPopularityAsync(action){
    let params=action.payload
    try{
        yield put(getBlogsByPopularityActionCreator.createPendingAction())
        const response=yield call(listBlog,params)
        if(response.statusCode>=300){
            yield put(getBlogsByPopularityActionCreator.createFailAction(response.data))
        }else{
            yield put(getBlogsByPopularityActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(getBlogsByPopularityActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetBlogsByPopularity(){
    yield takeEvery(REQUEST_BLOGS_BY_POPULARITY.request(), getBlogsByPopularityAsync)
}

//根据最喜欢获取blogs
function* getBlogsByFavoriteAsync(action){
    let params=action.payload
    try{
        yield put(getBlogsByFavoriteActionCreator.createPendingAction())
        const response=yield call(listBlog,params)
        if(response.statusCode>=300){
            yield put(getBlogsByFavoriteActionCreator.createFailAction(response.data))
        }else{
            yield put(getBlogsByFavoriteActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(getBlogsByFavoriteActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetBlogsByFavorite(){
    yield takeEvery(REQUEST_BLOGS_BY_FAVORITE.request(), getBlogsByFavoriteAsync)
}

//根据Tag获取blogs
function* getBlogsByTagAsync(action){
    let params=action.payload
    try{
        yield put(getBlogsByTagActionCreator.createPendingAction())
        const response=yield call(listBlog,params)
        if(response.statusCode>=300){
            yield put(getBlogsByTagActionCreator.createFailAction(response.data))
        }else{
            yield put(getBlogsByTagActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(getBlogsByTagActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetBlogsByTag(){
    yield takeEvery(REQUEST_BLOGS_BY_TAG.request(), getBlogsByTagAsync)
}

//根据category获取blogs
function* getBlogsByCategoryAsync(action){
    let params=action.payload
    try{
        yield put(getBlogsByCategoryActionCreator.createPendingAction())
        const response=yield call(listBlog,params)
        if(response.statusCode>=300){
            yield put(getBlogsByCategoryActionCreator.createFailAction(response.data))
        }else{
            yield put(getBlogsByCategoryActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(getBlogsByCategoryActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetBlogsByCategory(){
    yield takeEvery(REQUEST_BLOGS_BY_CATEGORY.request(), getBlogsByCategoryAsync)
}

//根据user获取blogs
function* getBlogsByUserAsync(action){
    let {userId,lastId}=action.payload
    try{
        yield put(getBlogsByUserActionCreator.createPendingAction())
        const response=yield call(getBlogsByUser,userId,lastId)
        if(response.statusCode>=300){
            yield put(getBlogsByUserActionCreator.createFailAction(response.data))
        }else{
            yield put(getBlogsByUserActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(getBlogsByUserActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetBlogsByUser(){
    yield takeEvery(REQUEST_BLOGS_BY_USER.request(), getBlogsByUserAsync)
}
//根据id列表获取blogs
function* getBlogsByIdsAsync(action){
    let {ids}=action.payload
    try{
        yield put(getBlogsByIdsActionCreator.createPendingAction())
        const response=yield call(getListBlogByIds,ids)
        if(response.statusCode>=300){
            yield put(getBlogsByIdsActionCreator.createFailAction(response.data))
        }else{
            yield put(getBlogsByIdsActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(getBlogsByIdsActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetBlogsByIds(){
    yield takeEvery(REQUEST_BLOGS_BY_IDS.request(), getBlogsByIdsAsync)
}

//创建blog
function* createBlogAsync(action){
    let {blog}=action.payload
    try{
        yield put(createBlogActionCreator.createPendingAction())
        const response=yield call(createBlog,blog)
        if(response.statusCode>=300){
            yield put(createBlogActionCreator.createFailAction(response.data))
        }else{
            yield put(createBlogActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(createBlogActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchCreateBlog(){
    yield takeEvery(REQUEST_CREATE_BLOG.request(), createBlogAsync)
}

//更新blog
function* updateBlogAsync(action){
    let {id,blog}=action.payload
    try{
        yield put(updateBlogActionCreator.createPendingAction())
        const response=yield call(updateBlogById,id,blog)
        if(response.statusCode>=300){
            yield put(updateBlogActionCreator.createFailAction(response.data))
        }else{
            yield put(updateBlogActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(updateBlogActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchUpdateBlog(){
    yield takeEvery(REQUEST_UPDATE_BLOG.request(), updateBlogAsync)
}

//删除blog
function* deleteBlogAsync(action){
    let {id}=action.payload
    try{
        yield put(deleteBlogActionCreator.createPendingAction())
        const response=yield call(deleteBlogById,id)
        if(response.statusCode>=300){
            yield put(deleteBlogActionCreator.createFailAction(response.data))
        }else{
            yield put(deleteBlogActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(deleteBlogActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchDeleteBlog(){
    yield takeEvery(REQUEST_DELETE_BLOG.request(), deleteBlogAsync)
}

//获取blog
function* getBlogAsync(action){
    let {id}=action.payload
    try{
        yield put(getBlogActionCreator.createPendingAction())
        const response=yield call(getBlogById,id)
        if(response.statusCode>=300){
            yield put(getBlogActionCreator.createFailAction(response.data))
        }else{
            yield put(getBlogActionCreator.createSuccessAction(response.data))
        }
     }catch(error) {
         yield put(getBlogActionCreator.createFailAction({"error":"发生网络错误"}))
     }
} 
export function* watchGetBlog(){
    yield takeEvery(REQUEST_GET_BLOG.request(), getBlogAsync)
}