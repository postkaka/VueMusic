import {request} from "./request";
//获取手机登陆数据
export function _getCellphone(phone,password) {
    return request({
        url:'/login/cellphone',
        params:{
            phone: phone,
            password: password
        }
    })
}