import {request} from "./request";

export function _getArtists(id) {
    return request({
        url: "/artists",
        params: {
            id: id
        }
    })

}
//获取歌手专辑数据
export function _getAlbum(id) {
    return request({
        url: '/artist/album',
        params: {
            id: id
        }
    })
}
//获取专辑详细数据
export function _getAlbumInfrom(id) {
    return request({
        url:'/album',
        params: {
            id: id
        }
    })
}
//获取歌手Mv数据
export  function _getMv(id) {
    return request({
        url:'/artist/mv',
        params: {
            id: id
        }
    })

}
//获取歌手详情
export function _getDesc(id) {
    return request({
        url: '/artist/desc',
        params: {
            id: id
        }
    })
}