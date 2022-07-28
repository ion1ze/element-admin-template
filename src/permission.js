import router from './router';

// 引入顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({showSpinner:false});

router.beforeEach(async(to,from,next)=>{
  NProgress.start();
  next();
});

router.afterEach(async()=>{
  NProgress.done();
});