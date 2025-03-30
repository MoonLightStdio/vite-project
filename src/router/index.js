import { ro } from "element-plus/es/locales.mjs";
import {createRouter,createWebHistory} from "vue-router";

const router = new createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/dashboard",
            name: "Dashboard",
            component:()=>import("../views/dashboard/index.vue"),
        },
        {
            path:"/",
            name:"login",
            component:()=>import("../views/login/Login.vue"),
        },
        {
            path:"/Login",
            name:"Login",
            component:()=>import("../views/login/StudentLogin.vue"),
        },
        {
            path:"/home",
            name:"Home",
            component:()=>import("../views/login/home.vue"),
        },
    ]


});
  /*router.beforeEach((to,from,next)=>{
    //to 将要访问
    //from  从哪访问
    //next  接着
  
    if(to.path=="/login"){
      return next();
    }
    //获取user
    const userFlag=window.sessionStorage.getItem("user");// 取出用户 user
  
    if(!userFlag){
      return next("/login"); //无值返回登录
    }
    next();//符合要求;
    
  })
*/
export default router