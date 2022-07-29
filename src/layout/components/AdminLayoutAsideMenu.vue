<template>
  <div class="admin-layout-aside-menu-wrapper">
    <div class="admin-layout-aside-menu-header">
      <img v-if="isCollapsed" class="logo" src="@/assets/images/logo-e.png" alt="logo"/>
      <img v-else class="logo" src="@/assets/images/logo.svg" alt="logo"/>
    </div>
    <el-menu class="admin-layout-aside-menu" background-color="#001529" :collapse="isCollapsed" :collapse-transition="false">
      <el-menu-item index="1">
        <i class="el-icon-stopwatch"></i>
        <span slot="title">仪表盘</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-info"></i>
        <span slot="title">关于</span>
      </el-menu-item>
    </el-menu>
    <div class="admin-layout-aside-menu-footer">
      <button class="collapse-button" @click="onChangeCollapsed">
        <i :class="collapsedIconName"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminLayoutAsideMenu',
  props:{
    isCollapsed:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
    };
  },
  computed:{
    collapsedIconName(){
      return this.isCollapsed ? 'el-icon-s-unfold':'el-icon-s-fold';
    }
  },
  methods:{
    onChangeCollapsed(){
      this.$emit('changeCollapsed');
    }
  }
};
</script>
<style lang="less">
.admin-layout-aside-menu-wrapper {
  height: 100%;
  user-select: none;
  display: flex;
  flex-direction: column;

  .admin-layout-aside-menu-header {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 5px;
    box-sizing: border-box;

    & > img {
      height: 40px;
    }
  }

  .admin-layout-aside-menu {
    flex: 1;
    border-right: none;
    overflow: hidden;
    width: 100%;
    
    .el-menu-item {
      color: #ffffff;

      &.is-active {
        background-color: #409EFF !important;
        color: #ffffff;
      }
    }
  }

  .admin-layout-aside-menu-footer {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    button.collapse-button {
      border: none;
      background-color: transparent;
      color: #ffffff;
      font-size: 16px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 3px;

      &:hover {
        background-color: rgba(0,0,0,.25);
      }
    }
  }
}
</style>