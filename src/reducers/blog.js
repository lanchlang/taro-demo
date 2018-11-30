import { combineReducers } from "redux";
import {REQUEST_SEARCH_BLOG,REQUEST_BLOGS_BY_DATE,
    REQUEST_BLOGS_BY_POPULARITY,REQUEST_BLOGS_BY_FAVORITE,
    REQUEST_BLOGS_BY_TAG,REQUEST_BLOGS_BY_CATEGORY,
    REQUEST_BLOGS_BY_USER,REQUEST_BLOGS_BY_IDS,
    REQUEST_CREATE_BLOG,REQUEST_UPDATE_BLOG,
    REQUEST_DELETE_BLOG,REQUEST_GET_BLOG,
    } from "../constants/index"

const INITIAL_POST_MAP_STATE = {}
      
function postMap (currentState = INITIAL_POST_MAP_STATE, action) {
        switch (action.type) {
          case REQUEST_SEARCH_BLOG.success(),REQUEST_BLOGS_BY_DATE.success()
          ,REQUEST_BLOGS_BY_POPULARITY.success(),REQUEST_BLOGS_BY_FAVORITE.success()
          ,REQUEST_BLOGS_BY_TAG.success(),REQUEST_BLOGS_BY_CATEGORY.success()
          ,REQUEST_BLOGS_BY_USER.success(),REQUEST_BLOGS_BY_IDS.success():
            return function(state){
                let newState={...state}
                let {blogs}=action.payload
                blogs.forEach(function(blog) {
                    newState[blog["id"]]=blog
                });
                return newState
            }(currentState) 
          case REQUEST_CREATE_BLOG.success():
            return function(state){
                let blog=action.payload
                let {id}=blog
                let newState={...state}
                newState[id]=blog
                return newState
            }(currentState)
          case REQUEST_UPDATE_BLOG.request():
            return function(state){
                let blog=action.payload
                let {id}=blog
                let newState={...state}
                newState[id]=blog
                return newState
            }(currentState)
          case REQUEST_DELETE_BLOG.request():
            return function(state){
                let {id} = action.payload
                let newState={...state}
                delete newState[id]   
                return newState
            }(currentState)
          case REQUEST_GET_BLOG.request():
            return function(state){
                let {blog} = action.payload
                let {id}=blog
                let newState={...state}
                newState[id]=blog   
                return newState
            }(currentState)     
          default:
             return currentState
        }
    }
const INITIAL_POST_IDS_BY_SEARCH_MAP_STATE={}
//保存搜索结果
function postIdsBySearchMap(currentState = INITIAL_POST_IDS_BY_SEARCH_MAP_STATE, action){
        switch (action.type) {
            case REQUEST_SEARCH_BLOG.success():
                return function(state){
                    let {query,last_id,blogs}=action.payload
                    let newState={...state}
                    if(last_id){
                        newState[query]=newState[query].concat(blogs.map(function(blog){return blog["id"]}))
                    }else{
                        newState[query]=blogs.map(function(blog){return blog["id"]})
                    } 
                    return newState
                }(currentState) 
            default:
                return currentState            
        }
}    

const INITIAL_POST_IDS_BY_DATE_LIST_STATE=[]
//根据日期获取
function postIdsByDateList(currentState = INITIAL_POST_IDS_BY_DATE_LIST_STATE, action){
    switch (action.type) {
        case REQUEST_BLOGS_BY_DATE.success():
            return function(state){
                let {last_id,blogs}=action.payload
                let newState=state
                if(last_id){
                    newState=newState.concat(blogs.map(function(blog){return blog["id"]}))
                }else{
                    newState=blogs.map(function(blog){return blog["id"]})
                } 
                return newState
            }(currentState) 
        default:
            return currentState            
    }
} 
const INITIAL_POST_IDS_BY_POPULARITY_LIST_STATE=[]
//根据受欢迎的程度获取
function postIdsByPopularityList(currentState = INITIAL_POST_IDS_BY_POPULARITY_LIST_STATE, action){
    switch (action.type) {
        case REQUEST_BLOGS_BY_POPULARITY.success():
            return function(state){
                let {popular_offset,blogs}=action.payload
                let newState=state
                if(popular_offset){
                    newState=newState.concat(blogs.map(function(blog){return blog["id"]}))
                }else{
                    newState=blogs.map(function(blog){return blog["id"]})
                } 
                return newState
            }(currentState) 
        default:
            return currentState            
    }
} 

const INITIAL_POST_IDS_BY_FAVORITE_LIST_STATE=[]
//根据受欢迎的程度获取
function postIdsByFavoriteList(currentState = INITIAL_POST_IDS_BY_FAVORITE_LIST_STATE, action){
    switch (action.type) {
        case REQUEST_BLOGS_BY_FAVORITE.success():
            return function(state){
                let {like_offset,blogs}=action.payload
                let newState=state
                if(like_offset){
                    newState=newState.concat(blogs.map(function(blog){return blog["id"]}))
                }else{
                    newState=blogs.map(function(blog){return blog["id"]})
                } 
                return newState
            }(currentState) 
        default:
            return currentState            
    }
} 

const INITIAL_POST_IDS_BY_TAG_MAP_STATE={}
//保存Tag的结果
function postIdsByTagMap(currentState = INITIAL_POST_IDS_BY_TAG_MAP_STATE, action){
    switch (action.type) {
        case REQUEST_BLOGS_BY_TAG.success():
            return function(state){
                let {tag,lastId,blogs}=action.payload
                let newState={...state}
                if(lastId){
                    newState[tag]=newState[tag].concat(blogs.map(function(blog){return blog["id"]}))
                }else{
                    newState[tag]=blogs.map(function(blog){return blog["id"]})
                } 
                return newState
            }(currentState) 
        default:
            return currentState            
    }
}  

const INITIAL_POST_IDS_BY_CATEGORY_MAP_STATE={}
//保存Category的结果
function postIdsByCategoryMap(currentState = INITIAL_POST_IDS_BY_CATEGORY_MAP_STATE, action){
    switch (action.type) {
        case REQUEST_BLOGS_BY_CATEGORY.success():
            return function(state){
                let {category_id,last_id,blogs}=action.payload
                let newState={...state}
                if(last_id){
                    newState[category_id]=newState[category_id].concat(blogs.map(function(blog){return blog["id"]}))
                }else{
                    newState[category_id]=blogs.map(function(blog){return blog["id"]})
                } 
                return newState
            }(currentState) 
        default:
            return currentState            
    }
}

const INITIAL_POST_IDS_BY_USER_MAP_STATE={}
//保存User的结果
function postIdsByUserMap(currentState = INITIAL_POST_IDS_BY_USER_MAP_STATE, action){
    switch (action.type) {
        case REQUEST_BLOGS_BY_USER.success():
            return function(state){
                let {id,last_id,blogs}=action.payload
                let newState={...state}
                if(last_id){
                    newState[id]=newState[id].concat(blogs.map(function(blog){return blog["id"]}))
                }else{
                    newState[id]=blogs.map(function(blog){return blog["id"]})
                } 
                return newState
            }(currentState) 
        case REQUEST_CREATE_BLOG.success():
            return function(state){
                let blog=action.payload
                let {user_id,id}=blog
                let newState={...state}
                if(newState[user_id]){
                    newState[user_id]=newState[user_id].concat([id]) 
                }
                return newState
            }(currentState)
        case REQUEST_DELETE_BLOG.request():
            return function(state){
                let {user_id,id} = action.payload
                let newState={...state}
                if(newState[user_id]){
                    newState[user_id]=newState[user_id].filter(function(postId){return postId!=id})
                }   
                return newState
            }(currentState)    
        default:
            return currentState            
    }
}

const postInfo=combineReducers({
    postMap,
    postIdsBySearchMap,
    postIdsByDateList,
    postIdsByPopularityList,
    postIdsByFavoriteList,
    postIdsByTagMap,
    postIdsByCategoryMap,
    postIdsByUserMap,
})
export default postInfo