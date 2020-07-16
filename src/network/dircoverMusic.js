import {request} from "./request";
// 获取轮播图数据
export function _getBanner() {
    return request({
        url:'/banner'
    })
}
export  function _getrecommend() {
    return request({
        url: "/personalized"
    })
}
export  function _getPrivatecontent() {
    return request({
        url: "/personalized/privatecontent"
    })
}
export  function _getNewSong() {
    return request({
        url:"/personalized/newsong"
    })
}