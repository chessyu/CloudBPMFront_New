
import { Component, Vue } from "vue-property-decorator"
import { API__fromTesta_MethodName } from "@/api/model/CDK/reportForm"

import { Getter, Action } from "vuex-class"
//import { FromTestaData } from '@/types/views/fromTesta.interface'

@Component({
  name: "fromTesta"
})
export default class FromTesta extends Vue {


  formItem: Object = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
  }

  columns = [
    {
      type: 'index',
      width: 60,
      align: 'center',
      className:'tableHeader'
    },
    {
      title: 'Date',
      key: 'date',
      resizable: true,
      width: 180,
      className:'tableHeader'
    },
    {
      title: 'Name',
      key: 'name',
      resizable: true,
      width: 180,
      className:'tableHeader'
    },
    {
      title: 'Age',
      key: 'age',
      resizable: true,
      width: 180,
      className:'tableHeader'
    },
    {
      title: 'Address',
      key: 'address',
      className:'tableHeader'
    }
  ]

  data = [
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    },
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    },
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    },
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    },
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    }

  ]

  openQuery: boolean = false;
  formIndex: Number = 2;
  tableHeight:Number = 0;

  mounted(){
    /**
     * 固定写法，初始化表格高度
     */
    this.$nextTick(()=>{
      this.tableHeight = (document.getElementsByClassName('content__table')[0] as HTMLFontElement).offsetHeight - 55;
    })
  }

  /**
   * 查询
   */
  private query(){

  }

  /**
   * 新增
   */
  private add(){

  }

  /**
   * 更多的下拉
   * @param type 类型 
   */
  private dropDownList(type:string){

  }

  /**
   * 选择某页 
   * @param index 页码
   */
  private onChange(index:Number){
    
  }

  /**
   * 选择当前页面显示多少条
   * @param index 显示多少条
   */
  private onPageSizeChange(index:Number){
    
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

  created() {
    this.init();
  }

  //数据初始化
  async init() {
    let data = await API__fromTesta_MethodName({})
  }

}
