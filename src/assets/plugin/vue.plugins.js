// export default {
//     install(Vue){
//         Vue.prototype.dragable ={
//             dragable_pc : function (id) {
//                 var dom = document.getElementById(id);
//                 dom.onmousedown = function (ev) {
//                     var ev = ev || event;
//                     //获取鼠标按下的坐标
//                     var x1 = ev.clientX;
//                     var y1 = ev.clientY;

//                     //获取元素的left，top值
//                     var l = dom.offsetLeft;
//                     var t = dom.offsetTop;

//                     var moveFn;
//                     //给可视区域添加鼠标的移动事件
//                     dom.parentNode.onmousemove = function (ev) {

//                         //event的兼容性
//                         var ev = ev || event;

//                         //获取鼠标移动时的坐标
//                         var x2 = ev.clientX;
//                         var y2 = ev.clientY;

//                         //计算出鼠标的移动距离
//                         var x = x2 - x1;
//                         var y = y2 - y1;

//                         //移动的数值与元素的left，top相加，得出元素的移动的距离
//                         var lt = y + t;
//                         var ls = x + l;

//                         //更改元素的left，top值
//                         // dom.style.top = lt + 'px';
//                         dom.style.left = ls + 'px';

//                         moveFn = function(){
//                             var list = dom.childNodes;
//                             var dW = 0;
//                             for(let i=0; i<list.length; i++){
//                                 dW += list[i].offsetWidth;
//                             }
//                             // var dW = dom.offsetWidth;
//                             var pW = dom.parentNode.offsetWidth;
//                             if( ls > 0 || dW < pW){
//                                 dom.style.left = '0px';
//                                 dom.style.transition= "all 0.3s ease 0s"
//                             }
//                             if(Math.abs(ls) > (dW - pW) && ls < 0 ){
//                                 dom.style.left = "-" + (dW - pW + 10) + 'px';
//                                 dom.style.transition= "all 0.3s ease 0s"
//                             }
//                         }
//                     }

//                     //清除
//                     dom.parentNode.onmouseup = function (ev) {

//                         dom.parentNode.onmousemove = null;
//                         if(moveFn) moveFn()
//                         dom.style.transition= "none 0.3s ease 0s"

//                     }
//                 }
//             },
//         }
//         Vue.prototype.$el = {

//         }
//     }
// }


export default {
    install(Vue:any){
        Vue.myPlugin = function(){
            console.log(66666666)
        }
    }
};






