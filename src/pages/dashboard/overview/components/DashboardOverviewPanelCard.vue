<template>
  <el-card shadow="never" class="dashboard-overview-panel-card">
    <div slot="header" class="clearfix">
      <span>{{title}}</span>
    </div>
    <div class="content">
      <span>{{content}}</span>
    </div>
  </el-card>
</template>
<script>
export default {
  name:'DashboardOverviewPanelCard',
  props:{
    title:{
      type:String,
      default:''
    },
    content:{
      type:String,
      default:''
    }
  }
};
</script>
<style lang="less">
.dashboard-overview-panel-card {
  .content {
    
    & > span {
      font-size: 28px;
    }
  }
}
</style>