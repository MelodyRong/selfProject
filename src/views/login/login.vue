<template>
    <div class="content">
      登录页面
      <van-button plain hairline type="primary">细边框按钮</van-button>
      <bar-chart :xData="xData" :yData="yData" :width="barWidth" :height="barHeight" :type="chartType"></bar-chart>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { Button } from 'vant'
  import barChart from "../../components/echarts/barChart";
  Vue.use(Button)
    export default {
      name: "login",
      data(){
          return {
            message:'',
            xData:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
            yData:[5, 20, 36, 10, 10, 20],
            barWidth:'100%',
            barHeight:'500px',
            chartType:'bar'
          }
      },
      components:{
        barChart
      },
      created() {

      },
      mounted() {

      },
      methods:{

      }
    }
</script>

<style lang="less" scoped>
.content{
  color: #6a7985;
  font-size: 14px;
}
  .chart{
    width: 100%;
    height: 500px;
  }
</style>
