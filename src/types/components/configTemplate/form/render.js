import itemIcon from './itemIcon'
import input from './formSubunit/input'

const formItem = {
    input
}

function GetNewFormItem(itemData:any,h:Function) {
    return h('FormItem',{
        props:{
            label:(itemData.default.label || itemData.eleName) + ':',
        }
    },
    [((formItem[itemData.eleName] && formItem[itemData.eleName](h,itemData)) || []).concat(itemData.default.configIcon ? itemIcon(h,itemData) : [])]);
}



export default {
    name:'renders',
    render:function(h:Function){
        let _this : any = this;
        let renderArray = [];
        let formItemLength = _this.renderConfig.formItemConfig.length;
        for(let i=0; i< formItemLength; i++){
            renderArray.push(GetNewFormItem(_this.renderConfig.formItemConfig[i],h))
        }
        return h("Form",{
            props:{
                model: _this.renderConfig.formConfig.model,
                rules: _this.renderConfig.formConfig.rules,
                inline:(_this.renderConfig.formConfig.inline || false),
                labelPosition:(_this.renderConfig.formConfig.labelPosition || 'right'),
                labelWidth:_this.renderConfig.formConfig.labelWidth,
                autocomplete:(_this.renderConfig.formConfig.autocomplete || 'off'),
                hideRequiredMark:(_this.renderConfig.formConfig.hideRequiredMark || false),
                labelColon:(_this.renderConfig.formConfig.labelColon || false),
                disabled:(_this.renderConfig.formConfig.disabled || false)
            },
            class:{
                'form__style':true
            }
        },renderArray)
    },
    renderError(h:Function, err:any){
        console.log(JSON.stringify(err));
        return h('form组件渲染错误',{style:{color:'red'}},err.stack);
    },
    props:{
        //传入form相关配置参数
        renderConfig:{
            type:Object,
            required:true
        }
    }
}

/***
 *  renderConfig 参数说明
 */

//   let renderConfig = {
//       formConfig:{
//         model:{},
//         reles:{},
//         inline:false,
//       },
//       formItemConfig:[
//         {
//             eleName:"input",
//             default:{
//                 // 对应数据库内类型
//                 type: 'input',
//                 formItem:24,  //列宽。总共24列
//                 isFormItem:true, //是否是属于form表下的。 控制配置icon位置的 
//                 icons:["setting","delete"], //显示的图标
//                 // 是否可配置
//                 // 控件左侧label内容
//                 label: '输入框',
//                 placeholder: '这是一个输入框',
//                 maxlength:1000,
//             }
//         }
//       ]
//   }









