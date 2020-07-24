import {request} from "./request";
//歌单数据
export function _getPlayList(id) {
    return request({
        url:'/playlist/detail',
        params: {
            id: id
        }
    })
}
//歌单评论数据
export function _getComent(id) {
    return request({
        url:'/comment/playlist',
        params: {
            id: id
        }
    })
}
//歌单收藏数据
export function _getSubscribers(id,limit) {
    return request({
        url:'/playlist/subscribers',
        params: {
            id: id,
            limit: limit
        }
    })
}