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
export  function _getSongUrl(id) {
    return request({
        url:'/song/url',
        params :{
            id
        }
    })
}
export  function _getHot() {
    return request({
        url:'/playlist/hot'
    })
}
export function _getMenu(cat,limit) {
    return request({
        url:'/top/playlist',
        params :{
            cat: cat,
            limit: 36
        }
    })

}
//获取排行榜数据
export function _getTop() {
    return request({
        url:'/toplist'
    })
}
//获取歌手数据
export function _getSinger(type,area) {
    return request({
        url:"/artist/list",
        params :{
            type:type,
            area:area
        }
    })

}
//获取最新音乐
export function _getNewSongs(type) {
    return request({
        url:"/top/song",
        params: {
            type: type
        }
    })

}