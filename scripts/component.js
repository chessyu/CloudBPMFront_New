/**
 * 快速生成组件
 */

const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run comp 文件名')
  process.exit(0)
}

console.log('基础组件生成中...')
/**
 * @msg: vue页面模版
 */
const VueTep = `
<template>
  <div class="component__${dirName}">
    {{data.componentName}}
  </div>
</template>

<script lang="ts" src="./${dirName}"></script>

<style lang='less' scoped>
.component__${dirName}{

}
</style>
`

const tsTemp = `
import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
//import { ${capPirName}Data } from '@/types/views/${dirName}.interface'

@Component({
  name:"${dirName}"
})
export default class ${capPirName} extends Vue {
  
}
` 


// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  componentName: string
}

`

fs.mkdirSync(`${basePath}/types/components/${dirName}`) // mkdir

process.chdir(`${basePath}/types/components/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue 
fs.writeFileSync(`${dirName}.ts`, tsTemp) // ts

// process.chdir(`${basePath}/types/components`) // cd components
// fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep) // interface 

setTimeout(()=>{
  console.log('基础组件生成完成...')
  process.exit(0)
},800)
