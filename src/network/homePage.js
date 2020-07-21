import {request} from "./request";
//搜索框获取的数据
export function _getSearch(keyword) {
    return request({
        url:'/search',
        params:{
            keyword: keyword
        }
    })
}
//热搜列表数据
export function _getHotList() {
    return request({
        url:'/search/hot'
    })

}