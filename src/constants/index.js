/**
 *登录/登出/注册
 **/
export const REQUEST_LOGIN="REQUEST_LOGIN"
export const LOGIN_CANCEL="LOGIN_CANCEL"
export const LOGIN_SUCCESS="LOGIN_SUCCESS"
export const LOGIN_FAIL="LOGIN_FAIL"
export const REQUEST_LOGOUT="REQUEST_LOGOUT"
export const LOGOUT_CANCEL="LOGOUT_CANCEL"
export const LOGOUT_SUCCESS="LOGOUT_SUCCESS"
export const LOGOUT_FAIL="LOGOUT_FAIL"
export const REQUEST_REGISTER="REQUEST_REGISTER"
export const REGISTER_CANCEL="LOGIN_CANCEL"
export const REGISTER_SUCCESS="REGISTER_SUCCESS"
export const REGISTER_FAIL="REGISTER_FAIL"

/**
 * sync data
 *  */
export const REQUEST_SYNC="REQUEST_SYNC"
export const SYNC_FAIL="SYNC_FAIL"
export const SYNC_SUCCESS="SYNC_SUCCESS"
/**
 * favor/unfavor
 **/
export const REQUEST_FAVOR="REQUEST_LOGIN"
export const FAVOR_FAIL="FAVOR_FAIL"
export const FAVOR_SUCCESS="FAVOR_SUCCESS"
export const REQUEST_UNFAVOR="REQUEST_LOGOUT"
export const UNFAVOR_FAIL="UNFAVOR_FAIL"
export const UNFAVOR_SUCCESS="UNFAVOR_SUCCESS"

/**
 * search
 **/
export const REQUEST_SEARCH="REQUEST_SEARCH"
export const SEARCH_CANCEL="SEARCH_CANCEL"
export const SEARCH_FAIL="SEARCH_FAIL"
export const SEARCH_SUCCESS="SEARCH_SUCCESS"

/**
 * GET POST LIST by create_date,popular(view cnt),favorite(like cnt),tag,category
 *  */
export const REQUEST_POSTS_BY_DATE="REQUEST_POSTS_BY_DATE"
export const POSTS_BY_DATE_CANCEL="POSTS_BY_DATE_CANCEL"
export const POSTS_BY_DATE_FAIL="POSTS_BY_DATE_FAIL"
export const POSTS_BY_DATE_SUCCESS="POSTS_BY_DATE_SUCCESS"

export const REQUEST_POSTS_BY_POPULARITY="REQUEST_POSTS_BY_POPULARITY"
export const POSTS_BY_POPULARITY_CANCEL="POSTS_BY_POPULARITY_CANCEL"
export const POSTS_BY_POPULARITY_FAIL="POSTS_BY_POPULARITY_FAIL"
export const POSTS_BY_POPULARITY_SUCCESS="POSTS_BY_POPULARITY_SUCCESS"

export const REQUEST_POSTS_BY_FAVORITE="REQUEST_POSTS_BY_FAVORITE"
export const POSTS_BY_FAVORITE_CANCEL="POSTS_BY_FAVORITE_CANCEL"
export const POSTS_BY_FAVORITE_FAIL="POSTS_BY_FAVORITE_FAIL"
export const POSTS_BY_FAVORITE_SUCCESS="POSTS_BY_FAVORITE_SUCCESS"

export const REQUEST_POSTS_BY_TAG="REQUEST_POSTS_BY_TAG"
export const POSTS_BY_TAG_CANCEL="POSTS_BY_TAG_CANCEL"
export const POSTS_BY_TAG_FAIL="POSTS_BY_TAG_FAIL"
export const POSTS_BY_TAG_SUCCESS="POSTS_BY_TAG_SUCCESS"

export const REQUEST_POSTS_BY_CATEGORY="REQUEST_POSTS_BY_CATEGORY"
export const POSTS_BY_CATEGORY_CANCEL="POSTS_BY_CATEGORY_CANCEL"
export const POSTS_BY_CATEGORY_FAIL="POSTS_BY_CATEGORY_FAIL"
export const POSTS_BY_CATEGORY_SUCCESS="POSTS_BY_CATEGORY_SUCCESS"

/**
 * CURD POST 
 *  */
export const REQUEST_CREATE_POST="REQUEST_CREATE_POST"
export const CREATE_POST_CANCEL="CREATE_POST_CANCEL"
export const CREATE_POST_FAIL="CREATE_POST_FAIL"
export const CREATE_POST_SUCCESS="CREATE_POST_SUCCESS"

export const REQUEST_UPDATE_POST="REQUEST_UPDATE_POST"
export const UPDATE_POST_CANCEL="UPDATE_POST_CANCEL"
export const UPDATE_POST_FAIL="UPDATE_POST_FAIL"
export const UPDATE_POST_SUCCESS="UPDATE_POST_SUCCESS"

export const REQUEST_DELETE_POST="REQUEST_DELETE_POST"
export const DELETE_POST_CANCEL="DELETE_POST_CANCEL"
export const DELETE_POST_FAIL="DELETE_POST_FAIL"
export const DELETE_POST_SUCCESS="DELETE_POST_SUCCESS"

export const REQUEST_GET_POST="REQUEST_GET_POST"
export const GET_POST_CANCEL="GET_POST_CANCEL"
export const GET_POST_FAIL="GET_POST_FAIL"
export const GET_POST_SUCCESS="GET_POST_SUCCESS"

/**
 * Create comment,delete comment, get comments by post 
 *  */

export const REQUEST_CREATE_COMMENT="REQUEST_CREATE_COMMENT"
export const CREATE_COMMENT_CANCEL="CREATE_COMMENT_CANCEL"
export const CREATE_COMMENT_FAIL="CREATE_COMMENT_FAIL"
export const CREATE_COMMENT_SUCCESS="CREATE_COMMENT_SUCCESS"

export const REQUEST_DELETE_COMMENT="REQUEST_DELETE_COMMENT"
export const DELETE_COMMENT_CANCEL="DELETE_COMMENT_CANCEL"
export const DELETE_COMMENT_FAIL="DELETE_COMMENT_FAIL"
export const DELETE_COMMENT_SUCCESS="DELETE_COMMENT_SUCCESS"

export const REQUEST_COMMENTS_BY_POST="REQUEST_COMMENTS_BY_POST"
export const COMMENTS_BY_POST_CANCEL="COMMENTS_BY_POST_CANCEL"
export const COMMENTS_BY_POST_FAIL="COMMENTS_BY_POST_FAIL"
export const COMMENTS_BY_POST_SUCCESS="COMMENTS_BY_POST_SUCCESS"