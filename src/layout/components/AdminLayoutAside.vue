<template>
  <div class="admin-layout-aside">
    <div class="admin-layout-aside-header">
      <img v-if="isCollapsed" class="logo" src="@/assets/images/logo-e.png" alt="logo"/>
      <img v-else class="logo" src="@/assets/images/logo.svg" alt="logo"/>
    </div>
    <admin-layout-aside-menu class="admin-layout-aside-menu" :collapse="isCollapsed" :dataSource="dataSource"/>
    <div class="admin-layout-aside-footer">
      <button class="collapse-button" @click="onChangeCollapsed">
        <i :class="collapsedIconName"></i>
      </button>
    </div>
  </div>
</template>
<script>
import AdminLayoutAsideMenu from './AdminLayoutAsideMenu.vue';
export default {
  name: 'AdminLayoutAside',
  components:{
    AdminLayoutAsideMenu
  },
  props:{
    isCollapsed:{
      type:Boolean,
      default:true
    },
    dataSource:{
      type:Array,
      default:()=>{
        return [];
      }
    }
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
.admin-layout-aside {
  height: 100%;
  user-select: none;
  display: flex;
  flex-direction: column;

  .admin-layout-aside-header {
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
    // 防止出现滚动条
    overflow: hidden;

    &.el-menu--collapse {
      width: 100%;
    }
    
    .el-menu-item {
      width: 100%;
    }

    .is-active {
      background-color: #409EFF !important;
      color: #ffffff;
    }
  }

  .admin-layout-aside-footer {
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