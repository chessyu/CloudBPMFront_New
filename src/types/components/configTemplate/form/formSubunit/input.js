export default (h:Function,d:any) => {
    return [
        h("Input",{
            props:{
                placeholder: d.default.placeholder,
                maxlength: parseInt(d.default.maxLength) || 20,
                value: d.default.value || "",
           },
           class:{
                'bpm__cursor-move':true,
           },
           on:{
                'on-change':(value:string)=>{
                     console.log(value);
                }
           }
        })
    ]
}

export let inputConf = {
    // 对应数据库内类型
    type: 'input',
    formItem:24,  //列宽。总共24列
    isFormItem:true, //是否是属于form表下的。 控制配置icon位置的 
    icons:["setting","delete"], //显示的图标
    // 是否可配置
    // 控件左侧label内容
    label: '输入框',
    placeholder: '这是一个输入框',
    maxlength:1000,
}
  

