/***
 * 快速生成统一表格页面。/view/model/模块名
 */

const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

let allPath = process.argv[2].split('/');
const dirName = allPath[2]  //取文件名
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)  //首字母转大写

if (allPath.length != 2) {
    console.log('输入命令无效')
    console.log('示例：npm run tablePage 系统名/文件夹名/文件名')
    process.exit(0)
}

console.log('文件创建中...')

/**
* vue 页面模板
*/
const VueTemp = `
<template>
    <section class="ht__${dirName}-wrap animation-left">
        <div class="ht__query-box">
            <Form :model="formItem" :label-width="120" class="form__style" inline>
            <FormItem label="游戏名称:" class="form_item">
                <Input v-model="formItem.input1" placeholder="请输入..." />
            </FormItem>
            <FormItem label="游戏名称:" class="form_item">
                <Input v-model="formItem.input2" placeholder="请输入..." />
            </FormItem>
            <FormItem label="游戏名称:" class="form_item" v-show="openQuery">
                <Input v-model="formItem.input3" placeholder="请输入..." />
            </FormItem>
            <FormItem label="游戏名称:" class="form_item" v-show="openQuery">
                <Input v-model="formItem.input4" placeholder="请输入..." />
            </FormItem>
            <FormItem label="游戏名称:" class="form_item" v-show="openQuery">
                <Input v-model="formItem.input5" placeholder="请输入..." />
            </FormItem>
            <FormItem label="游戏名称:" class="form_item" v-show="openQuery">
                <Input v-model="formItem.input6" placeholder="请输入..." />
            </FormItem>
            <FormItem label="游戏名称:" class="form_item" v-show="openQuery">
                <Input v-model="formItem.input7" placeholder="请输入..." />
            </FormItem>
            <FormItem
                :class="['form_item', 'form-buttom',(openQuery && formIndex % 3 > 0 ? 'buttom_glList':'')]"
            >
                <Button type="primary"  @click="query">查询</Button>
                <a class="moer" href="#" v-if="!openQuery" @click="queryMoer(true)">
                <Icon type="ios-arrow-down" />展开
                </a>
                <a class="moer" href="#" v-else @click="queryMoer(false)">
                <Icon type="ios-arrow-up" />收起
                </a>
            </FormItem>
            </Form>
        </div>
        <div class="ht__content c_table">
            <div class="content__table">
                <div class="table__event">
                    <ButtonGroup>
                        <Button type="primary" size="small"  @click="add">
                            <Icon type="md-add"></Icon>新增
                        </Button>
                        <Button  size="small">
                            <Dropdown  @on-click="dropDownList">
                                更多
                                <Icon type="ios-more"></Icon>
                                <DropdownMenu slot="list">
                                    <DropdownItem><Icon type="ios-trash moer_icon" />删除</DropdownItem>
                                    <DropdownItem><Icon type="ios-star moer_icon" />审核</DropdownItem>
                                    <DropdownItem><Icon type="ios-star-outline moer_icon" />反审核</DropdownItem>
                                    <DropdownItem divided><Icon type="md-download moer_icon" />导出</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Button>
                    </ButtonGroup>
                </div>
                <Table id="table" :columns="tableColumns" :data="tableData" :height="tableHeight" highlight-row></Table>
            </div>
            <div class="table__page">
                <Page :total="100"  @on-change="onChange" @on-page-size-change="onPageSizeChange" show-sizer show-total />
            </div>
        </div> 
    </section>
</template>

<script lang='ts' src='./${dirName}'></script>

<style lang='less' scoped>
.ht__${dirName}-wrap{
    overflow: hidden !important;
    .c_table {
        height: calc(100% - 99px);
    }
    .content__table {
        height: calc(100% - 43px);
    }
    .table__event {
        height: 50px;
        padding: 15px 0 0 25px;
    }
    .table__page {
        text-align: center;
        padding: 5px 0;
        background: #fff;
    }
    .moer_icon{
        font-size: 15px;
        float: left;
        position: relative;
        top: 2px;
    }
}
</style>`


/**
 * vue对应的 ts文件
 */
const tsTemp = `
import { Component, Vue } from "vue-property-decorator"
import { API__${dirName}_MethodName } from "@/api/model/${allPath[1]}/${allPath[0]}" 

import { Getter, Action } from "vuex-class"
//import { ${capPirName}Data } from '@/types/views/${dirName}.interface'

@Component({
  name:"${dirName}"
})
export default class ${capPirName} extends Vue {
  formItem = {};              //搜索条件
  openQuery: boolean = false; //查询块默认收起
  formIndex: Number = 2;      //查询块条件默认显示2条
  tableHeight:Number = 0;     //表格高度变量
  tableColumns = [];          //表格title变量
  tableData = [];             //表格数据变量

  created(){
    //this.init(); 
  }

  mounted(){
    /**
     * 固定写法，初始化表格高度
     */
    this.$nextTick(()=>{
      this.tableHeight = (document.getElementsByClassName('content__table')[0] as HTMLFontElement).offsetHeight - 55;
    })
  }

  //请求API接口并初始化数据
  async init(){
    let data = await API__${dirName}_MethodName({})
  }

  /**
   * 查询
   */
  private query(){
    console.log('触发查询')
  }

  /**
   * 新增
   */
  private add(){
    console.log('触发新增')
  }

  /**
   * 更多的下拉
   * @param type 类型 
   */
  private dropDownList(type:string){
    console.log('触发下拉,取值:'+ type)
  }

  /**
   * 选择某页 
   * @param index 页码
   */
  private onChange(index:Number){
    console.log('选择第'+ index + '页')
  }

  /**
   * 选择当前页面显示多少条
   * @param index 显示多少条
   */
  private onPageSizeChange(index:Number){
    console.log('当前显示'+ index + '条')
  }

  /**
   * 查询块的展开或收起事件  内置自动获取并赋值表格的高度 实现分页器固定下方
   * @param type 展开类型
   */
  private queryMoer(type: boolean): void {
    this.openQuery = type;
    if (type) {
      this.formIndex = Object.keys(this.formIndex).length;
    } else {
      this.formIndex = 2;
    }
    this.$nextTick(()=>{
      let height = (this.$el.firstChild as HTMLFontElement).offsetHeight;
      (this.$el.lastChild as HTMLFontElement).style.height = 'calc(100% - '+ (height + 15) +'px)'
      this.tableHeight = (document.getElementsByClassName('content__table')[0] as HTMLFontElement).offsetHeight - 55;
    })
  }

}
` 

/**
 * api 接口模版
 */
const apiTep = `

//============================ API__${capPirName} =========================================

/**
 * 获取查询条件数据
 * @param params 请求参数
 */
export const API__${capPirName}_GetQuerList = (params:any) =>
  request({
      url:'url',
      method:'post',
      params
  })

/**
 * 获取查询数据
 * @param params 请求参数
 */
export const API__${capPirName}_GetQuerData = (params:any) =>
  request({
      url:'url',
      method:'post',
      params
  })

/**
 * 获取表格数据
 * @param params 请求参数
 */
export const API__${capPirName}_GetTableData = (params:any) =>
    request({
        url:'url',
        method:'post',
        params
    })

`

process.chdir(`${basePath}/views/model/${allPath[1]}/${allPath[0]}`) //cd
fs.writeFileSync(`${dirName}.vue`,VueTemp); //created
fs.writeFileSync(`${dirName}.ts`,tsTemp); //created

fs.writeFileSync(`${basePath}/api/model/${allPath[1]}/${allPath[0]}.ts`,apiTep,{
    flag:'a'
}); 


setTimeout(()=>{console.log('文件创建已完成...');process.exit(0);},800)
