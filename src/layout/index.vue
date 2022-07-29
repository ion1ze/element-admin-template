<template>
  <div class="admin-layout-wrapper">
    <el-container class="admin-layout">
      <el-aside class="admin-layout-aside-wrapper" :class="{'is-collapsed':isCollapsed}">
        <admin-layout-aside @changeCollapsed="onChangeCollapsed" :isCollapsed="isCollapsed" :dataSource="menus"/>
      </el-aside>
      <el-container>
        <el-header height="64px" class="admin-layout-header-wrapper">
          <admin-layout-header/>
        </el-header>
        <el-main class="admin-layout-main">
          <router-view/>
        </el-main>
        <el-footer class="admin-layout-footer-wrapper">
          <admin-layout-footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AdminLayoutAside from './components/AdminLayoutAside.vue';
import AdminLayoutHeader from './components/AdminLayoutHeader.vue';
import AdminLayoutFooter from './components/AdminLayoutFooter.vue';
import store from '@/store';
export default {
  name: 'AdminLayout',
  components:{
    AdminLayoutAside,
    AdminLayoutHeader,
    AdminLayoutFooter
  },
  data(){
    return {
      menus:[
        {
          path: '/dashboard',
          title: '仪表盘',
          icon: 'el-icon-stopwatch',
          children:[
            {
              path: '/dashboard/overview',
              title: '系统概览'
            }
          ]
        },
        {
          path:'/account/center',
          title:'个人中心',
          icon:'el-icon-user'
        },
        {
          path:'/about',
          title:'关于',
          icon:'el-icon-info'
        }
      ]
    };
  },
  computed:{
    isCollapsed(){
      return store.state.setting.isCollapsed;
    }
  },
  methods:{
    onChangeCollapsed(){
      store.dispatch('updateCollapsed',!this.isCollapsed);
    }
  }
};
</script>
<style lang="less">
.admin-layout {
  height: 100vh;

  .admin-layout-aside-wrapper {
    background-color: #001529;
    transition: all 0.3s;

    &.is-collapsed {
      width: 64px !important;
    }
  }

  .admin-layout-header-wrapper {
    width: 100%;
  }

  .admin-layout-main {
    background-color: #eee;
  }
  
  .admin-layout-footer-wrapper {
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>