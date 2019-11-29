
import { Component, Vue } from "vue-property-decorator"

import { Getter, Action } from "vuex-class"
import { ReportFormData } from '@/types/views/reportForm.interface'


@Component({
  name:'ReportForm'
})
export default class ReportForm extends Vue {


  formItem: Object = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
  }

  openQuery:boolean = false;
  formIndex:Number = 2;

  private queryMoer(type :boolean):void{
    this.openQuery = type;
    if(type){
      this.formIndex = Object.keys(this.formIndex).length;
    }else{
      this.formIndex = 2;
    }
  }


  



}
