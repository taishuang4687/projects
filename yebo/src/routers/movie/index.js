export default {
    path:'/movie',
    component:()=>import('@/views/Movie'),
    // 配置movie页面的二级路由
    children:[
        {
            path:'city',
            component:()=>import('@/components/City')
        },{
            path:'nowhot',
            component:()=>import('@/components/NowHot')
        },{
            path:'comingsoon',
            component:()=>import('@/components/ComingSoon')
        },{
            path:'search',
            component:()=>import('@/components/Search')
        },{
            path:"/movie",
            redirect:'/movie/nowhot'
        }

    ]
}