
import request from '../utils/request'


export const SingIn = (params:any) =>
    request({
        url:'http://mock.cn/login',
        method:'post',
        params
    })
