export default [
    {
        path: '/',
        redirect:'/login',
    },
    {
        path: '*',
        name: "error",
        component: () => import('@/views/error/error.vue')
    },
    {
        path: '/login',
        name: "login",
        component: () => import('@/views/login/login.vue')
    },
    { 
        path: '/main',
        name: 'layout',
        redirect:'/cdk/index',
        component: () => import('@/views/layout/layout.vue'),
        children:[
            {
                path:'/cdk/index',
                name:'cdkIndex',
                component: () => import('@/views/model/CDK/index/index.vue')
            },
            {
                path:'/cdk/report',
                name:'report',
                redirect:'/cdk/report/echartline',
                component: () => import('@/views/model/CDK/reportForm/reportForm.vue'),
                children:[
                    {
                        path:'/cdk/report/echartline',
                        name:'echartline',
                        component: () => import('@/types/components/echartLine/echartLine.vue'),
                    },
                    {
                        path:'/cdk/report/echartcolumnar',
                        name:'echartcolumnar',
                        component: () => import('@/types/components/echartColumnar/echartColumnar.vue'),
                    },
                    {
                        path:'/cdk/report/echartpie',
                        name:'echartpie',
                        component: () => import('@/types/components/echartPie/echartPie.vue'),
                    },
                    {
                        path:'/cdk/report/echartpoint',
                        name:'echartpoint',
                        component: () => import('@/types/components/echartPoint/echartPoint.vue'),
                    },
                ]
            },
            {
                path:'/cdk/froma',
                name:'froma',
                component: () => import('@/views/model/CDK/reportForm/fromTesta.vue'),
            },
            {
                path:'/cdk/fromo',
                name:'fromo',
                component: () => import('@/views/model/CDK/reportForm/fromTesto.vue'),
            },
            {
                path:'/cdk/fromt',
                name:'fromt',
                component: () => import('@/views/model/CDK/reportForm/fromTestt.vue'),
            },
        ]
    },
    
]