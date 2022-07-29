<template>
  <div class="dashboard-overview">
    <h1>系统概况</h1>
    <el-row :gutter="20" class="dashboard-overview-panel">
      <el-col :span="6" v-for="(card,index) in panelCards" :key="index">
        <dashboard-overview-panel-card :title="card.title" :content="card.content"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <dashboard-overview-line-chart/>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>产出比</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DashboardOverviewLineChart from './components/DashboardOverviewLineChart.vue';
import DashboardOverviewPanelCard from './components/DashboardOverviewPanelCard.vue';
export default {
  name:'DashboardOverviewView',
  components:{
    DashboardOverviewLineChart,
    DashboardOverviewPanelCard
  },
  data(){
    return {
      panelCards:[
        {
          title:'新注册用户数',
          content:'10'
        },
        {
          title:'总用户数',
          content:'666'
        },
        {
          title:'今日订单数',
          content:'21'
        },
        {
          title:'总订单数',
          content:'1000'
        }
      ]
    };
  }
};
</script>
<style lang="less">
.dashboard-overview {
  .dashboard-overview-panel {
    margin-bottom: 20px;
  }
}
</style>