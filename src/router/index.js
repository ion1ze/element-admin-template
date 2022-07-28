import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminLayout from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component: () => import('@/pages/login/index.vue')
  },
  {
    path:'/dashboard',
    redirect:'/dashboard/overview',
    component:AdminLayout,
    children:[
      {
        path:'overview',
        component: () => import('@/pages/dashboard/overview/index.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
