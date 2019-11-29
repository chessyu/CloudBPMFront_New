/***
 * 快速生成页面。/view/model/模块名
 */

 const fs = require('fs')
 const path = require('path')
 const basePath = path.resolve(__dirname,'../src')

 let delet = process.argv[3];
 let allPath = process.argv[2].split('/');
 const dirName = allPath[2]  //取文件名
 const capPirName = dirName.substring(0,1).toUpperCase() + dirName.substring(1)  //首字母转大写

 if(delet){
    console.log('相关文件及接口正在删除...')
    fs.unlinkSync(`${basePath}/views/model/${allPath[0]}/${allPath[1]}/${dirName}.vue`)
    fs.unlinkSync(`${basePath}/views/model/${allPath[0]}/${allPath[1]}/${dirName}.ts`)
    setTimeout(e=>{
        console.log('文件已删除... api接口请手动删除')
        process.exit(0)
    },500)
    
 }
 
 if(allPath.length != 2){
    console.log('输入命令无效')
    console.log('示例：npm run page 系统名/文件夹名/文件名')
    process.exit(0)
 }

 console.log('文件创建中...')
 /**
 * vue 页面模板
 */
const VueTemp =  `
<template>
    <section class="ht__${dirName}-wrap animation-left">
      
    </section>
</template>

<script lang='ts' src='./${dirName}'></script>

<style lang='less' scoped>
.ht__${dirName}-wrap{

}
</style>`

/**
 * vue对应的 ts文件
 */
const tsTemp = `
import { Component, Vue } from "vue-property-decorator"
import { API__${dirName}_MethodName } from "@/api/model/${allPath[0]}/${allPath[1]}" 

import { Getter, Action } from "vuex-class"
//import { ${capPirName}Data } from '@/types/views/${dirName}.interface'

@Component({
  name:"${dirName}"
})
export default class ${capPirName} extends Vue {

  created(){
    this.init(); 
  }

  //数据初始化
  async init(){
    let data = await API__${dirName}_MethodName({})
  }

}
` 

/**
 * api 接口模版
 */
const apiTep = `

//============================ API__${capPirName} =========================================

/**
 * 自定义业务接口
 * @param params 请求参数
 */
export const API__${capPirName}_MethodName = (params:any) =>
  request({
      url:'url',
      method:'post',
      params
  })

`

process.chdir(`${basePath}/views/model/${allPath[0]}/${allPath[1]}`) //cd
fs.writeFileSync(`${dirName}.vue`,VueTemp); //created
fs.writeFileSync(`${dirName}.ts`,tsTemp); //created

fs.writeFileSync(`${basePath}/api/model/${allPath[0]}/${allPath[1]}.ts`,apiTep,{
    flag:'a'
}); 


setTimeout(()=>{console.log('文件创建已完成...');process.exit(0);},800)
















