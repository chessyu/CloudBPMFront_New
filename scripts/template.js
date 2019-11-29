/**
 * 创建模块并创建界面
 */
const fs = require('fs')
const path  = require('path')
const basePath = path.resolve(__dirname,'../src')

  let allPath = process.argv[2].split('/');
const dirName = allPath[1]  //取文件名
const capPirName = dirName.substring(0,1).toUpperCase() + dirName.substring(1)

if(!dirName){
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run temp 文件名/页面名')
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

const tsTemp = `
import { Component, Vue } from "vue-property-decorator"
import { API__${capPirName}_getMethodName } from "@/api/model/${dirName}" 

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
    let data = await API__${capPirName}_getMethodName({})
  }

}
` 

// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  pageName: string
}

// VUEX ${dirName}.State 参数类型
export interface ${capPirName}State {
  data?: any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

`

// vuex 模版
const vuexTep = `import { ${capPirName}State } from '@/types/views/${dirName}.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ${capPirName}Api from '@/api/${dirName}'

const state: ${capPirName}State = {
  ${dirName}: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<${capPirName}State, any> = {
  author: (state: ${capPirName}State) => state.${dirName}.author
}

// 更改state
const mutations: MutationTree<${capPirName}State> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ${capPirName}State, data: ${capPirName}State) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<${capPirName}State, any> = {
  UPDATE_STATE_ASYN({ commit, state: ${capPirName}State }, data: ${capPirName}State) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   ${capPirName}.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

`

// api 接口模版
const apiTep = `
import request from '../../utils/request'

//============================ API__${capPirName} =========================================

/**
 * 自定义业务接口
 * @param params 请求参数
 */

export const API__${capPirName}_getMethodName = (params:any) =>
  request({
      url:'url',
      method:'post',
      params
  })

`

fs.mkdirSync(`${basePath}/views/model/${allPath[1]}/${allPath[0]}`) // mkdir

process.chdir(`${basePath}/views/model/${allPath[1]}/${allPath[0]}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTemp) // vue 
fs.writeFileSync(`${dirName}.ts`, tsTemp) // ts

// process.chdir(`${basePath}/types/views`); // cd types
// fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep) // interface

//process.chdir(`${basePath}/store/module`); // cd store
//fs.writeFileSync(`${dirName}.ts`, vuexTep) // vuex

process.chdir(`${basePath}/api/model/`); // cd api
fs.writeFileSync(`${dirName}.ts`, apiTep) // api

setTimeout(()=>{console.log('模块/文件创建已完成...');process.exit(0);},800)
