<template>
  <div class="admin-layout-header">
    <div></div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        Admin <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="toAccountCenter">个人中心</el-dropdown-item>
        <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>    
</template>
<script>
export default {
  name:'AdminLayoutHeader',
  methods:{
    handleCommand(command){
      switch(command){
      case 'toAccountCenter':
        this.$router.push('/account/center');
        break;
      case 'logout':
        this.$router.push('/login');
        break;
      default:
        break;
      }
    }
  }
};
</script>
<style lang="less">
.admin-layout-header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>