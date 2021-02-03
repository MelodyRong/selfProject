<template>
    <div class="content">
      登录页面
      <van-button plain hairline type="primary">细边框按钮</van-button>
      <div ref="chart"></div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { Button } from 'vant'
  Vue.use(Button)
    export default {
      name: "login",
      data(){
          return {
            message:'vant按钮'
          }
      },
      created() {

      },
      mounted() {
        const drawLine = this.initEcharts();
        window.onresize = function temp() {
          drawLine.resize(); //重绘，窗口大小改动时
        };
      },
      methods:{
        initEcharts(){
          let myChart = this.$echarts.init(this.$refs.chart);
          // 绘制图表
          myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          });
          return myChart;
        }
      }
    }
</script>

<style lang="less" scoped>
.content{
  color: blue;
}
</style>
