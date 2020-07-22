import {request} from "./request";
//搜索框获取的数据
export function _getSearch(keywords) {
    return request({
        url:'/search',
        params:{
            keywords: keywords
        }
    })
}
//热搜列表数据
export function _getHotList() {
    return request({
        url:'/search/hot'
    })

}
//搜索建议数据
export  function _getOffer(keywords) {
    return request({
        url:'/search/suggest',
        params: {
            keywords: keywords
        }
    })

}