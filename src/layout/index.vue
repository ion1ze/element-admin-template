<template>
  <div class="admin-layout-wrapper">
    <el-container class="admin-layout">
      <el-aside class="admin-layout-aside" :class="{'is-collapsed':isCollapsed}">
        <admin-layout-aside-menu @changeCollapsed="onChangeCollapsed" :isCollapsed="isCollapsed"/>
      </el-aside>
      <el-container>
        <el-header height="64px" class="admin-layout-header">
          顶栏
        </el-header>
        <el-main class="admin-layout-main">
          <router-view/>
        </el-main>
        <el-footer class="admin-layout-footer">
          <admin-layout-footer-content/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AdminLayoutAsideMenu from './components/AdminLayoutAsideMenu.vue';
import AdminLayoutFooterContent from './components/AdminLayoutFooterContent.vue';
import store from '@/store';
export default {
  name: 'AdminLayout',
  components:{
    AdminLayoutAsideMenu,
    AdminLayoutFooterContent
  },
  data(){
    return {
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

  .admin-layout-aside {
    background-color: #001529;
    transition: all 0.3s;

    &.is-collapsed {
      width: 64px !important;
    }
  }

  .admin-layout-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .admin-layout-main {
    background-color: #eee;
  }
  
  .admin-layout-footer {
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>