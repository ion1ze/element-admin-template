import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminLayout from '@/layout';

Vue.use(VueRouter);

// 解决 NavigationDuplicated 错误
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err=>err);
};

const ConstantRoutes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/login',
    component: () => import('@/pages/login/index.vue')
  },
];

export const AsyncRoutes = [
  {
    path:'/dashboard',
    redirect:'/dashboard/overview',
    component:AdminLayout,
    meta:{
      roles: ['ROLE_ADMIN']
    },
    children:[
      {
        path:'overview',
        component: () => import('@/pages/dashboard/overview/index.vue')
      }
    ]
  },
  {
    path:'/account',
    component:AdminLayout,
    meta:{
      roles:['ROLE_ADMIN','ROLE_USER']
    },
    children:[
      {
        path:'center',
        component: ()=> import('@/pages/account/AccountCenter.vue')
      }
    ]
  },
  {
    path:'/about',
    component:AdminLayout,
    meta:{
      roles:['ROLE_ADMIN','ROLE_USER']
    },
    children:[
      {
        path:'',
        component:()=>import('@/pages/about/index.vue')
      }
    ]
  }
];

const routes = [...ConstantRoutes,...AsyncRoutes];

const router = new VueRouter({
  routes
});

export default router;
