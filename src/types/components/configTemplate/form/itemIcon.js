export default (h:Function,data:any) => {
    let icons:any = [];
        data.default.icons.forEach((el:String) => {
        switch(el){
            //判断按钮类型
            case "setting":
                icons.push(h('Icon',{
                    props:{
                        type:'md-settings'
                    },
                    on:{
                        click(){
                            console.log('设置图标按钮事件')
                        }
                    }
                }));
                break;
            case "delete":
                icons.push(h('Icon',{
                    props:{
                        type:'md-remove'
                    },
                    on:{
                        click(){
                            console.log('删除图标按钮事件')
                        }
                    }
                }));
                break;
        }
    });

    const item_icon = [h('div',{

    }),icons];

    return item_icon;
}