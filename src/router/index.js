import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
        component:()=>import ('../views/Home')
    },
    {
        path:"/city/:cityId",
        name:'c',
        component:()=>import ("../views/City")
    },
    {
        path:"/login",
        component:()=>import("../views/Login")
    },
    {
        path:'/msite',
        name:'d',
        component:()=>import("../views/Msite")
    },
    {
        path:'/search',
        component:()=>import('../views/Search')
    },
    {
        path:'/profile',
        component:()=>import("../views/Profile")
    },
    {
        path:'/profile/info',
        component:()=>import('../views/Info')
    },
    {
        path:'/food',
        name:'f',
        component:()=>import("../views/Food")
    },
    {
        path:'/search/:geohash',
        component:()=>import('../views/Search')
    },
    {
        path:'/profile/info/setusername',
        component:()=>import('../views/Setusername')
    },
    {
        path:'/forget',
        component:()=>import('../views/Forget')
    },
    {
        path:'/profile/info/address',
        component:()=>import('../views/Address')
    },
    {
        path:'/service',
        component:()=>import('../views/Service')
    },
    {
        path:'/vipcard',
        component:()=>import('../views/Vipcard')
    },
    {
        path:'/vipcard/vipdescription',
        component:()=>import('../views/Vipdescription')
    },
    {
        path:'/balance',
        component:()=>import('../views/Balance')
    },
    {
        path:'/points',
        component:()=>import('../views/Points')
    },
    {
        path:'/benefit',
        component:()=>import('../views/Benefit'),
        children:[
            {
                path:'/',
                redirect: '/hongbao',
                component:()=>import('../views/Hongbao')
            },
            {
                path:'/hongbao',
                component:()=>import('../views/Hongbao')
            },
            {
                path:'/daijin',
                component:()=>import('../views/Daijin')
            }
        ]
    }


]

const router = new VueRouter({
  routes
})

export default router
