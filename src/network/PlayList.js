import {request} from "./request";

export function _getPlayList(id) {
    return request({
        url:'/playlist/detail',
        params: {
            id: id
        }
    })
}
export function _getComent(id) {
    return request({
        url:'/comment/playlist',
        params: {
            id: id
        }
    })
}