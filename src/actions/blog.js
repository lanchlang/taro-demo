import ActionCreator from "./common"
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
    REQUEST_CREATE_BLOG,
    REQUEST_UPDATE_BLOG,
    REQUEST_DELETE_BLOG,
    REQUEST_GET_BLOG
} from '../constants/index'
//对BLOG点赞
/**
 * @param {BLOG的ID} id
 */

export const favorBlogActionCreator=new ActionCreator(REQUEST_FAVOR)
//取消对BLOG点赞
/**
 * @param {BLOG的ID} id
 */

export const unfavorBlogActionCreator=new ActionCreator(REQUEST_UNFAVOR)
//搜索blog
/**
 * @param {查询的内容} query {最后的ID}last_id
 */

export const searchBlogActionCreator=new ActionCreator(REQUEST_SEARCH_BLOG)

//按照日期获取blogs
/**
 * @param {最后的ID}last_id
 */

export const getBlogsByDateActionCreator=new ActionCreator(REQUEST_BLOGS_BY_DATE)
//按照view cnt获取blogs
/**
 * @param {从多少开始}popular_offset
 */

export const getBlogsByPopularityActionCreator=new ActionCreator(REQUEST_BLOGS_BY_POPULARITY)
//按照like cnt获取blogs
/**
 * @param {从多少开始}like_offset
 */

export const getBlogsByFavoriteActionCreator=new ActionCreator(REQUEST_BLOGS_BY_FAVORITE)
//按照tag获取blogs
/**
 * @param {标签}tag {最后的ID}last_id
 */

export const getBlogsByTagActionCreator=new ActionCreator(REQUEST_BLOGS_BY_TAG)

//按照category获取blogs
/**
 * @param {分类}category_id {最后的ID}last_id
 */

export const getBlogsByCategoryActionCreator=new ActionCreator(REQUEST_BLOGS_BY_CATEGORY)

//按照用户获取blogs
/**
 * @param {用户ID}user_id {最后的ID}last_id
 */

export const getBlogsByUserActionCreator=new ActionCreator(REQUEST_BLOGS_BY_USER)

//创建blog
/**
 * @param {blog内容}blog
 */

export const createBlogActionCreator=new ActionCreator(REQUEST_CREATE_BLOG)

//更新blog
/**
 * @param {博客ID}id {blog内容}blog
 */

export const updateBlogActionCreator=new ActionCreator(REQUEST_UPDATE_BLOG)

//删除blog
/**
 * @param {博客ID}id 
 */

export const deleteBlogActionCreator=new ActionCreator(REQUEST_DELETE_BLOG)

//获取blog
/**
 * @param {博客ID}id 
 */

export const getBlogActionCreator=new ActionCreator(REQUEST_GET_BLOG)