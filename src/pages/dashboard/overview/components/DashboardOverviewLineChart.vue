<template>
  <el-card class="dashboardboard-overview-line-chart" shadow="never">
    <div slot="header" class="clearfix">
      <span>总趋势</span>
    </div>
    <div ref="dashboardboard-overview-line-chart-container" class="dashboardboard-overview-line-chart-container" style="width: 100%;height: 300px;"></div>
  </el-card>
</template>
<script>
import * as echarts from 'echarts';
let overviewLineChart = undefined;
export default {
  name:'DashboardOverviewLineChart',
  mounted(){
    this.renderLineChart();
    window.addEventListener('resize',this.resizeLineChart);
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.resizeLineChart);
  },
  methods:{
    renderLineChart(){
      overviewLineChart = echarts.init(this.$refs['dashboardboard-overview-line-chart-container']);
      overviewLineChart.setOption({
        color:['#409EFF'],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      });
    },
    resizeLineChart(){
      overviewLineChart.resize();
    }
  }
};
</script>
<style lang="less">
.dashboard-overview-line-chart {
  width: 100%;
}
</style>