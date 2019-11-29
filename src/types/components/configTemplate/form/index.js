import render from './render'

const Item = {
    render
}


const install = function (Vue:any) {
    Vue.component(render.name,render)
}
if (typeof window !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue);
}

export default Object.assign(Item,{install})