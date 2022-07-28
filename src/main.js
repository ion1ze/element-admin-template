import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 引入路由守卫等前端权限模块 
import './permission';

// 引入全局样式
import './style/index.less';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
