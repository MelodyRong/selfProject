<template>
    <div class="content">
      <div ref="chart" class="chart" :style="{height:height,width:width}"></div>
    </div>
</template>

<script>
    export default {
      name: "barChart",
      props: {
        xData: {
          type: Array,
          require: true,
        },
        yData: {
          type: Array,
          require: true,
        },
        textTitle:{
          type: String,
          require: false
        },
        width:{
          type: String,
          require: false,
          default: "500px",
        },
        height:{
          type: String,
          require: false,
          default: "100%",
        },
        tooltipData:{
          type: Object,
          require: false
        },//用于鼠标经过展示内容
        type:{
          type: String,
          require: true
        }
      },
      data(){
        return {

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
            color: ['#3398DB'],
            title: { text: this.textTitle },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
              },
              // formatter:'{b0}</br>{a0}:{c0}元</br>{a1}:{c1}单<br/>{a2}:{c2}元<br/>{a3}:{c3}元',
              formatter: function (params) {
                // console.log(params);
                let relVal;
                params.map((item,idx)=>{
                  relVal = item.name + "<br/>" + item.seriesName + " : " + item.value + "<br/>";
                })
                return relVal;
              },
            },
            xAxis: {
              type: 'category',
              data: this.xData,
              axisTick: {
                alignWithLabel: true
              }
            },
            yAxis: [
              {
                type: "value",
              }
            ],
            series: [
              {
                name:'销量',
                type: this.type,
                data:this.yData
              }
            ]
          });
          return myChart;
        }
      },

    }
</script>

<style lang="less" scoped>
/*.chart{*/
/*  width: 100%;*/
/*  height: 500px;*/
/*}*/
</style>
