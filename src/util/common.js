import {BASE_URL} from '../constants/common'
//利用Base_Url 生成url
export function generateUrl(url){
    return BASE_URL+url
}
//TODO:
export function getJwtToken(){
    return {user_token:""}
}
//TODO:
export function saveJwtToken(jwtToken){
    console.log(jwtToken)
}
export function placeholder(){

}