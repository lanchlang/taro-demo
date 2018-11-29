import Taro from '@tarojs/taro'
import {generateUrl,getJwtToken} from '../util/common'


//通过id删除comment
export function deleteCommentById(id){
    return Taro.request({
        url: generateUrl("/comments/"+id),
        method:"DELETE",
        header: {
            ...getJwtToken()
        }
      })
}
//创建comment
export function createComment(comment){
    return Taro.request({
        url: generateUrl("/comments/"),
        data: {...comment},
        header: {
            ...getJwtToken(),
            'content-type': 'application/json',
        },
        method:"POST",
      })
}
//通过post获取comments
export function getCommentsByPost(postId,lastId){
    return Taro.request({
        url: generateUrl("/posts/"+postId+"/comments"),
        data: {
            last_id: lastId,
        },
        method:"GET",
        header: {
            ...getJwtToken()
        }
    })
}