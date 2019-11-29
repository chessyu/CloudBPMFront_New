
import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ErrorData } from '@/types/views/error.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class Error extends Vue {
  
  data: ErrorData = {
    pageName: 'error'
  }

  created() {
    //
  }
    
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
