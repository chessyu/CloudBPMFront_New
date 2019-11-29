
import { Component, Vue } from "vue-property-decorator"
import { API_MenuSetup_getMethodName } from "@/api/model/CDK/menuSetup" 

import { Getter, Action } from "vuex-class"
//import { MenuSetupData } from '@/types/views/menuSetup.interface'

@Component({
  name:"menuSetup"
})
export default class MenuSetup extends Vue {
  

  created(){
    this.init(); 
  }

  //数据初始化
  async init(){
    let data = await API_MenuSetup_getMethodName({})
  }

}
