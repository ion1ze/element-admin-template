import router from './router';
import store from '@/store';

// 引入顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({showSpinner:false});


router.beforeEach(async(to,from,next)=>{
  NProgress.start();
  const currentUser = store.state.permission.currentUser;
  const asyncRoutes = store.state.permission.routes;

  if(currentUser){
    if(asyncRoutes.length === 0){
      const {roles} = currentUser;
      const asyncRoutes = await store.dispatch('GenerateAsyncRoutesByRoles',roles);
      asyncRoutes.forEach((route)=>{
        router.addRoute(route);
      });
      next({...to,replace:true});
      return;
    }
    next();
  }else {
    // 未登录处理逻辑
    if(to.path === '/login'){
      next();
    }else {
      next({
        path:`/login?redirect=${to.path || '/'}`,
      });
    }
  }
});

router.afterEach(async()=>{
  NProgress.done();
});