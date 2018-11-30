import Taro from '@tarojs/taro'
import {generateUrl,getJwtToken} from '../util/common'

//通过user获取blogs
export function getBlogById(id){
    return Taro.request({
        url: generateUrl("/blogs/"+id),
        method:"GET",
        header: {
            ...getJwtToken()
        }
    })
}
//点赞
export function likeBlogById(id){
    return Taro.request({
        url: generateUrl("/blogs/"+id+"/like"),
        method:"GET",
        header: {
            ...getJwtToken()
        }
    })
}
//取消点赞
export function unlikeBlogById(id){
    return Taro.request({
        url: generateUrl("/blogs/"+id+"/unlike"),
        method:"GET",
        header: {
            ...getJwtToken()
        }
    })
}
//删除blog
export function deleteBlogById(id){
    return Taro.request({
        url: generateUrl("/blogs/"+id),
        method:"DELETE",
        header: {
            ...getJwtToken()
        }
    })
}
//更新blog
export function updateBlogById(id,blog){
    return Taro.request({
        url: generateUrl("/blogs/"+id),
        method:"PUT",
        data:{
            ...blog
        },
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//创建blog
export function createBlog(blog){
    return Taro.request({
        url: generateUrl("/blogs/"),
        method:"POST",
        data:{
            ...blog
        },
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//搜索blog
export function searchBlog(query,lastId){
    return Taro.request({
        url: generateUrl("/blogs/search"),
        method:"POST",
        data:{
            "query":query,
            "last_id":lastId,
        },
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//通过ids获取blogs
export function getListBlogByIds(ids){
    return Taro.request({
        url: generateUrl("/blogs/ids"),
        method:"POST",
        data:{
            "ids":ids,
        },
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        }
    })
}
//通过参数获取blogs
export function listBlog(params){
    return Taro.request({
        url: generateUrl("/blogs/ids"),
        method:"GET",
        data:{
            ...params
        },
        header: {
            ...getJwtToken(),
        }
    })
}

//通过user获取blogs
export function getBlogsByUser(params){
    let {id,last_id}=params
    return Taro.request({
        url: generateUrl("/users/"+id+"/blogs"),
        data: {
            last_id: last_id,
        },
        method:"GET",
        header: {
            ...getJwtToken()
        }
    })
}
