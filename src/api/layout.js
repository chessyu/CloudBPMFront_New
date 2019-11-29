
import request from '../utils/request'


export const GetMenuList = (params:any) =>
    request({
        url:'/main/menu',
        method:'post',
        params
    })

