
import { Component, Vue } from "vue-property-decorator"
import { API__fromTesto_MethodName } from "@/api/model/CDK/reportForm" 

import { Getter, Action } from "vuex-class"
//import { FromTestoData } from '@/types/views/fromTesto.interface'

@Component({
  name:"fromTesto"
})
export default class FromTesto extends Vue {
  renderConfig = {
    formConfig:{
      model:{
        input1:'1',
        input2:'2',
        input3:'3',
        input4:'4',
      },
      labelWidth:120,
      inline:true
    },
    formItemConfig:[
      {
        eleName : 'input',
        default:{
          // 对应数据库内类型
          field: 'input1',
          icons:["setting","delete"], //显示的图标
          label: '输入框',
          placeholder: '这是一个输入框',
        }
      },{
        eleName : 'input',
        default:{
          // 对应数据库内类型
          field: 'input2',
          icons:["setting","delete"], //显示的图标
          label: '输入框',
          placeholder: '这是一个输入框',
        }
      },
      {
        eleName : 'input',
        default:{
          // 对应数据库内类型
          field: 'input3',
          icons:["setting","delete"], //显示的图标
          label: '输入框',
          placeholder: '这是一个输入框',
        }
      },
      {
        eleName : 'input',
        default:{
          // 对应数据库内类型
          field: 'input4',
          icons:["setting","delete"], //显示的图标
          label: '输入框',
          placeholder: '这是一个输入框',
        }
      }
    ]
  }


  created(){
    //this.init(); 
  }

  //数据初始化
  async init(){
    let data = await API__fromTesto_MethodName({})
  }

}
