
import Mock from 'mockjs'

var Random = Mock.Random;

interface Option {
    url:string,
    type:string,
    body:any
}

//登录接口
Mock.mock(RegExp('http://mock.cn/login' + ".*"),(option:Option) => {
    let data = option.url.split('?')[1].split('&');
    let element = {}, result = {};
    for (let index = 0; index < data.length; index++) {
        element[data[index].split('=')[0]] = data[index].split('=')[1]
    }
    result['msg'] = '登录成功';
    result['code'] = 200;
    return {"data":result};
})